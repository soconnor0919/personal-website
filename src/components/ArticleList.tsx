import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface Article {
  title: string;
  description: string;
  author: string;
  source: string;
  link: string;
}

export interface ArticleListProps {
  articles: Article[];
  loading?: boolean;
  skeletonCount?: number;
  CardSkeleton?: React.ComponentType;
}

export function ArticleList({
  articles,
  loading = false,
  skeletonCount = 3,
  CardSkeleton,
}: ArticleListProps) {
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
          </CardHeader>
          <CardContent>
            <div className="h-4 w-full rounded bg-primary/10" />
            <div className="mt-2 h-4 w-5/6 rounded bg-primary/10" />
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
      {articles.map((article, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{article.title}</CardTitle>
              <Link
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
            <CardDescription className="text-sm text-muted-foreground">
              Written by {article.author}, found in {article.source}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {article.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ArticleList;
