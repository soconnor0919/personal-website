"use client";

import {
  ArrowUpRight,
  BookOpenText,
  FileText,
  Presentation,
  BookOpen,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import { CardSkeleton } from "~/components/ui/skeletons";
import type { Publication } from "~/lib/bibtex";
import { parseBibtex } from "~/lib/bibtex";
import {
  trackPdfView,
  trackDoiClick,
  trackBibtexDownload,
  trackSlidesView,
} from "~/lib/analytics";

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const tagsToStrip = ["paperUrl", "posterUrl"];

  useEffect(() => {
    fetch("/publications.bib")
      .then((res) => res.text())
      .then((text) => {
        const pubs = parseBibtex(text);
        setPublications(pubs);
        setLoading(false);
      });
  }, []);

  const downloadBibtex = (pub: Publication) => {
    // Track the BibTeX download
    trackBibtexDownload({
      publicationTitle: pub.title,
      publicationType: pub.type,
      publicationYear: pub.year,
      citationKey: pub.citationKey,
      venue: pub.venue,
    });

    const {
      title,
      authors,
      venue,
      year,
      doi,
      abstract,
      type,
      citationType,
      citationKey,
    } = pub;
    let bibtexEntry = `@${citationType}{${citationKey},\n`;
    bibtexEntry += `  title = {${title}},\n`;
    bibtexEntry += `  author = {${authors.join(" and ")}},\n`;
    bibtexEntry += `  year = {${year}},\n`;
    if (type === "conference" || type === "workshop") {
      bibtexEntry += `  organization = {${venue}},\n`;
    } else if (type === "journal") {
      bibtexEntry += `  journal = {${venue}},\n`;
    } else if (type === "thesis") {
      bibtexEntry += `  school = {${venue}},\n`;
    }
    if (doi) {
      bibtexEntry += `  doi = {${doi}},\n`;
    }
    if (abstract) {
      bibtexEntry += `  abstract = {${abstract}},\n`;
    }
    bibtexEntry += `}\n`;

    const blob = new Blob([bibtexEntry], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${citationKey}.bib`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePaperClick = (pub: Publication) => {
    trackPdfView({
      publicationTitle: pub.title,
      publicationType: pub.type,
      publicationYear: pub.year,
      citationKey: pub.citationKey,
      venue: pub.venue,
      pdfType: "paper",
    });
  };

  const handlePosterClick = (pub: Publication) => {
    trackPdfView({
      publicationTitle: pub.title,
      publicationType: pub.type,
      publicationYear: pub.year,
      citationKey: pub.citationKey,
      venue: pub.venue,
      pdfType: "poster",
    });
  };

  const handleDoiClick = (pub: Publication) => {
    if (pub.doi) {
      trackDoiClick({
        publicationTitle: pub.title,
        publicationType: pub.type,
        publicationYear: pub.year,
        citationKey: pub.citationKey,
        venue: pub.venue,
        doi: pub.doi,
      });
    }
  };

  const handleSlidesClick = (pub: Publication) => {
    trackSlidesView({
      publicationTitle: pub.title,
      publicationType: pub.type,
      publicationYear: pub.year,
      citationKey: pub.citationKey,
      venue: pub.venue,
    });
  };

  return (
    <div className="space-y-6">
      <section className="animate-fade-in-up prose prose-zinc dark:prose-invert max-w-none">
        <div className="flex items-start gap-3">
          <BookOpenText className="h-8 w-8 text-primary" />
          <div>
            <h1 className="mb-2 text-2xl font-bold">
              Peer-Reviewed Publications
            </h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          My research publications in human-robot interaction and robotics.
        </p>
      </section>

      <div className="animate-fade-in-up-delay-2 space-y-6">
        {loading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          publications.map((pub, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${Math.min(index + 3, 4)} card-hover`}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle>{pub.title}</CardTitle>
                    {pub.paperUrl && (
                      <Link
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary sm:flex-shrink-0"
                        onClick={() => handlePaperClick(pub)}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {pub.authors.join(", ")}
                  </CardDescription>
                  <CardDescription className="text-sm">
                    {pub.venue} ({pub.year})
                  </CardDescription>
                  {pub.address && (
                    <CardDescription className="text-sm text-muted-foreground">
                      {pub.address}
                    </CardDescription>
                  )}
                  {pub.notes && (
                    <div className="mt-1">
                      <Badge variant="outline" className="text-xs">
                        {pub.notes}
                      </Badge>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  {pub.abstract && (
                    <p className="text-sm text-muted-foreground">
                      {pub.abstract}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="flex h-6 items-center capitalize"
                    >
                      {pub.type}
                    </Badge>
                    {pub.doi && (
                      <Link
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleDoiClick(pub)}
                      >
                        <Badge
                          variant="secondary"
                          className="flex h-6 items-center capitalize"
                        >
                          <ArrowUpRight className="mr-1 h-3 w-3" />
                          DOI
                        </Badge>
                      </Link>
                    )}
                    {pub.paperUrl && (
                      <Link
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handlePaperClick(pub)}
                      >
                        <Badge
                          variant="secondary"
                          className="flex h-6 items-center capitalize"
                        >
                          <FileText className="mr-1 h-3 w-3" />
                          Paper
                        </Badge>
                      </Link>
                    )}
                    {pub.posterUrl && (
                      <Link
                        href={pub.posterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handlePosterClick(pub)}
                      >
                        <Badge
                          variant="secondary"
                          className="flex h-6 items-center capitalize"
                        >
                          <Presentation className="mr-1 h-3 w-3" />
                          Poster
                        </Badge>
                      </Link>
                    )}
                    {pub.slidesUrl && (
                      <Link
                        href={pub.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleSlidesClick(pub)}
                      >
                        <Badge
                          variant="secondary"
                          className="flex h-6 items-center capitalize"
                        >
                          <Monitor className="mr-1 h-3 w-3" />
                          Slides
                        </Badge>
                      </Link>
                    )}
                    <Badge
                      onClick={() => downloadBibtex(pub)}
                      className="flex h-6 cursor-pointer items-center capitalize"
                      variant="secondary"
                    >
                      <BookOpenText className="mr-1 h-3 w-3" />
                      BibTeX
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
