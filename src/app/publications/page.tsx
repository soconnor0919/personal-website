"use client";

import {
  ArrowUpRight,
  BookOpenText,
  FileText,
  Presentation,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { Badge } from "~/components/ui/badge";
import { CardSkeleton } from "~/components/ui/skeletons";
import { Button } from "~/components/ui/button";
import { PageLayout } from "~/components/layout/PageLayout";
import { PageContentSkeleton } from "~/components/layout/PageLayoutSkeleton";
import type { Publication } from "~/lib/bibtex";
import { parseBibtex } from "~/lib/bibtex";
import { PublicationList } from "~/components/PublicationList";

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/publications.bib")
      .then((res) => res.text())
      .then((text) => {
        const pubs = parseBibtex(text);
        // Patch year to string | number for PublicationList compatibility
        setPublications(
          pubs.map((pub) => ({
            ...pub,
            year: typeof pub.year === "number" ? pub.year : String(pub.year),
          })),
        );
        setLoading(false);
      });
  }, []);

  const downloadBibtex = (pub: Publication) => {
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

  return (
    <PageLayout
      headerProps={{
        title: "Peer-Reviewed Publications",
        description: (
          <>My research publications in human-robot interaction and robotics.</>
        ),
        icon: <BookOpen className="h-5 w-5" />,
        action: (
          <Button asChild variant="default" size="sm">
            <Link
              href="/publications.bib"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download BibTeX File
              <BookOpenText className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        ),
      }}
    >
      <Suspense
        fallback={
          <PublicationList
            publications={[]}
            loading
            skeletonCount={3}
            CardSkeleton={CardSkeleton}
          />
        }
      >
        <PublicationList
          publications={publications}
          onDownloadBibtex={downloadBibtex}
        />
      </Suspense>
    </PageLayout>
  );
}
