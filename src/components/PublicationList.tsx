import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenText,
  FileText,
  Presentation,
} from "lucide-react";

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string | number;
  doi?: string;
  abstract?: string;
  type: "conference" | "journal" | "workshop" | "thesis";
  paperUrl?: string;
  posterUrl?: string;
  citationType?: string;
  citationKey?: string;
}

export interface PublicationListProps {
  publications: Publication[];
  loading?: boolean;
  skeletonCount?: number;
  CardSkeleton?: React.ComponentType;
  onDownloadBibtex?: (pub: Publication) => void;
}

export function PublicationList({
  publications,
  loading = false,
  skeletonCount = 3,
  CardSkeleton,
  onDownloadBibtex,
}: PublicationListProps) {
  // Default skeleton if not provided
  const Skeleton = CardSkeleton
    ? CardSkeleton
    : () => (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="h-6 w-1/3 rounded bg-primary/10" />
              <div className="h-5 w-5 rounded-full bg-primary/10" />
            </div>
            <div className="mt-2 h-4 w-full rounded bg-primary/10" />
            <div className="mt-2 h-4 w-2/3 rounded bg-primary/10" />
          </CardHeader>
          <CardContent>
            <div className="h-4 w-full rounded bg-primary/10" />
            <div className="mt-2 h-4 w-5/6 rounded bg-primary/10" />
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="h-5 w-16 rounded bg-primary/10" />
              <div className="h-5 w-16 rounded bg-primary/10" />
              <div className="h-5 w-16 rounded bg-primary/10" />
            </div>
          </CardContent>
        </Card>
      );

  if (loading) {
    return (
      <div className="space-y-6">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {publications.map((pub, index) => (
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
              {pub.authors.join(", ")}
            </CardDescription>
            <CardDescription className="text-sm">
              {pub.venue} ({pub.year})
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            {pub.abstract && (
              <p className="text-sm text-muted-foreground">{pub.abstract}</p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
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
              {onDownloadBibtex && (
                <Badge
                  onClick={() => onDownloadBibtex(pub)}
                  className="cursor-pointer capitalize"
                  variant="secondary"
                >
                  <BookOpenText className="h-4 w-4" />
                  BibTeX
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PublicationList;
