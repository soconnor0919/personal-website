"use client";

import { ArrowUpRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { articles } from "~/lib/data";
import { Button } from "~/components/ui/button";
import { PageLayout } from "~/components/layout/PageLayout";
import { PageContentSkeleton } from "~/components/layout/PageLayoutSkeleton";
import { CardSkeleton } from "~/components/ui/skeletons";
import { ArticleList } from "~/components/ArticleList";

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
    <PageLayout
      headerProps={{
        title: "In the Media",
        description: (
          <>
            I have been lucky enough to have a few wonderful articles written
            about me and my work. Go check them out!
          </>
        ),
        icon: <Newspaper className="h-5 w-5" />,
        action: (
          <Button asChild variant="default" size="sm">
            <Link
              href="https://www.google.com/search?q=soconnor0919"
              target="_blank"
              rel="noopener noreferrer"
            >
              Search Me Online
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        ),
      }}
    >
      <Suspense
        fallback={
          <ArticleList
            articles={[]}
            loading
            skeletonCount={3}
            CardSkeleton={CardSkeleton}
          />
        }
      >
        <ArticleList articles={articles} />
      </Suspense>
    </PageLayout>
  );
}
