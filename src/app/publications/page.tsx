'use client';

import { ArrowUpRight, BookOpenText, FileText, Presentation } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { CardSkeleton } from "~/components/ui/skeletons";
import type { Publication } from "~/lib/bibtex";
import { parseBibtex } from "~/lib/bibtex";

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const tagsToStrip = ['paperUrl', 'posterUrl'];

  useEffect(() => {
    fetch('/publications.bib')
      .then(res => res.text())
      .then(text => {
        const pubs = parseBibtex(text);
        setPublications(pubs);
        setLoading(false);
      });
  }, []);

  const downloadBibtex = (pub: Publication) => {
    const { title, authors, venue, year, doi, abstract, type, citationType, citationKey } = pub;
    let bibtexEntry = `@${citationType}{${citationKey},\n`;
    bibtexEntry += `  title = {${title}},\n`;
    bibtexEntry += `  author = {${authors.join(' and ')}},\n`;
    bibtexEntry += `  year = {${year}},\n`;
    if (type === 'conference' || type === 'workshop') {
      bibtexEntry += `  organization = {${venue}},\n`;
    } else if (type === 'journal') {
      bibtexEntry += `  journal = {${venue}},\n`;
    } else if (type === 'thesis') {
      bibtexEntry += `  school = {${venue}},\n`;
    }
    if (doi) {
      bibtexEntry += `  doi = {${doi}},\n`;
    }
    if (abstract) {
      bibtexEntry += `  abstract = {${abstract}},\n`;
    }
    bibtexEntry += `}\n`;

    const blob = new Blob([bibtexEntry], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${citationKey}.bib`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <h1 className="text-2xl font-bold">Publications 📚</h1>
        <p className="text-lg text-muted-foreground mt-2">
          My research publications in human-robot interaction and robotics.
        </p>
      </section>

      <div className="space-y-6">
        {loading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          publications.map((pub, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{pub.title}</CardTitle>
                  {pub.paperUrl && (
                    <Link 
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  )}
                </div>
                <CardDescription className="text-base">
                  {pub.authors.join(', ')}
                </CardDescription>
                <CardDescription className="text-sm">
                  {pub.venue} ({pub.year})
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {pub.abstract && (
                  <p className="text-sm text-muted-foreground">
                    {pub.abstract}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="capitalize">
                    {pub.type}
                  </Badge>
                  {pub.doi && (
                    <Link 
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="secondary" className="capitalize">
                        <ArrowUpRight className="h-4 w-4" />
                        DOI
                      </Badge>
                    </Link>
                  )}
                  {pub.paperUrl && (
                    <Link 
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="secondary" className="capitalize">
                        <FileText className="h-4 w-4" />
                        Paper
                      </Badge>
                    </Link>
                  )}
                  {pub.posterUrl && (
                    <Link 
                      href={pub.posterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="secondary" className="capitalize">
                        <Presentation className="h-4 w-4" />
                        Poster
                      </Badge>
                    </Link>
                  )}
                  <Badge
                    onClick={() => downloadBibtex(pub)} 
                    className="cursor-pointer capitalize"
                    variant="secondary"
                  >
                    <BookOpenText className="h-4 w-4" />
                    BibTeX
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
