"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import { CardSkeleton } from "~/components/ui/skeletons";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Plane } from "lucide-react";
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
    <div className="space-y-6">
      <section className="animate-fade-in-up prose prose-zinc dark:prose-invert max-w-none">
        <div className="flex items-start gap-3">
          <Plane className="h-8 w-8 text-primary" />
          <div>
            <h1 className="mb-2 text-2xl font-bold">My Trips & Events</h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          A collection of memorable trips and events I&apos;ve attended.
        </p>
      </section>

      <div className="animate-fade-in-up-delay-2 grid-equal-height grid grid-cols-1 gap-6 md:grid-cols-2">
        {loading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          travel.map((trip, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${Math.min(index + 3, 4)} card-hover`}
            >
              <Card className="card-full-height overflow-hidden">
                <CardHeader className="p-0">
                  <div className="flex flex-col">
                    <div className="flex space-x-0 overflow-x-auto">
                      {trip.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="flex-shrink-0">
                          <Image
                            src={image}
                            alt={
                              trip.alts && trip.alts[imgIndex]
                                ? trip.alts[imgIndex]
                                : `${trip.title} - image ${imgIndex + 1}`
                            }
                            width={250}
                            height={200}
                            className="max-h-[200px] min-h-[200px] object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="card-content-stretch">
                  <div className="flex flex-1 flex-col">
                    <div className="flex-1">
                      <CardTitle className="mb-2 mt-6">{trip.title}</CardTitle>
                      <CardDescription className="">
                        {trip.description}
                      </CardDescription>
                    </div>
                    {/* Show badges for tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {trip.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
