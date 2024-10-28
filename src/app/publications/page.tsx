'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowUpRight, FileText, Presentation } from "lucide-react";
import Link from "next/link";
import { parseBibtex } from "~/lib/bibtex";
import { useEffect, useState } from "react";
import type { Publication } from "~/lib/bibtex";
import { Skeleton } from "~/components/ui/skeleton";

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/publications.bib')
      .then(res => res.text())
      .then(text => {
        const pubs = parseBibtex(text);
        setPublications(pubs);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <h1 className="text-2xl font-bold">Publications</h1>
        <p className="text-lg text-muted-foreground">
          My research publications in human-robot interaction and robotics.
        </p>
      </section>

      <div className="space-y-6">
        {loading ? (
          <Card>
            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full mt-2" />
            </CardContent>
          </Card>
        ) : (
          publications.map((pub, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{pub.title}</CardTitle>
                  {pub.url && (
                    <Link 
                      href={pub.url}
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
                      <Badge variant="outline" className="capitalize">
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
                      <Badge variant="outline" className="capitalize">
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
                      <Badge variant="outline" className="capitalize">
                        <Presentation className="h-4 w-4" />
                        Poster
                      </Badge>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
