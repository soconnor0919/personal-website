"use client";

import { Plane } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { PageLayout } from "~/components/layout/PageLayout";
import { TravelList } from "~/components/TravelList";
import { Button } from "~/components/ui/button";
import { CardSkeleton } from "~/components/ui/skeletons";
import { travel } from "~/lib/data";

export default function TripsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout
      headerProps={{
        title: "My Trips & Events",
        description: (
          <>A collection of memorable trips and events I&apos;ve attended.</>
        ),
        icon: <Plane className="h-5 w-5" />,
        action: (
          <Button variant="default" size="sm" asChild>
            <a href="#trips-list">Jump to trips</a>
          </Button>
        ),
      }}
    >
      <Suspense
        fallback={
          <TravelList
            trips={[]}
            loading
            skeletonCount={6}
            CardSkeleton={CardSkeleton}
          />
        }
      >
        <TravelList trips={travel} />
      </Suspense>
    </PageLayout>
  );
}
