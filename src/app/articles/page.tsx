"use client";

import { ArrowUpRight, Newspaper } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { CardSkeleton } from "~/components/ui/skeletons";
import { useState, useEffect } from "react";
import { articles } from "~/lib/data";

export default function ArticlesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      setLoading(false);
    };
    fetchArticles();
  }, []);

  return (
    <div className="space-y-6">
      <section className="animate-fade-in-up prose prose-zinc dark:prose-invert max-w-none">
        <div className="flex items-start gap-3">
          <Newspaper className="h-8 w-8 text-primary" />
          <div>
            <h1 className="mb-2 text-2xl font-bold">In the Media</h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          I have been lucky enough to have a few wonderful articles written
          about me and my work. Go check them out!
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
          articles.map((article, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${Math.min(index + 3, 4)} card-hover`}
            >
              <Card>
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}
