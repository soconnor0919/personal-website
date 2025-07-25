import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";

export interface Trip {
  title: string;
  description: string;
  tags: string[];
  images: string[];
  alts?: string[];
}

export interface TravelListProps {
  trips: Trip[];
  loading?: boolean;
  skeletonCount?: number;
  CardSkeleton?: React.ComponentType;
}

export function TravelList({
  trips,
  loading = false,
  skeletonCount = 6,
  CardSkeleton,
}: TravelListProps) {
  // Default skeleton if not provided
  const Skeleton = CardSkeleton
    ? CardSkeleton
    : () => (
        <Card className="overflow-hidden rounded-lg">
          <CardHeader className="p-0">
            <div className="flex flex-col">
              <div className="flex space-x-0 overflow-x-auto">
                {Array.from({ length: 2 }).map((_, imgIndex) => (
                  <div key={imgIndex} className="flex-shrink-0">
                    <div className="max-h-[200px] min-h-[200px] w-[250px] bg-primary/10 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col content-between justify-items-start">
              <div className="mb-2 mt-6 h-6 w-1/2 rounded bg-primary/10" />
              <div className="h-4 w-3/4 rounded bg-primary/10" />
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="h-5 w-16 rounded bg-primary/10" />
                <div className="h-5 w-16 rounded bg-primary/10" />
              </div>
            </div>
          </CardContent>
        </Card>
      );

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {trips.map((trip, index) => (
        <Card key={index} className="overflow-hidden rounded-lg">
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
          <CardContent>
            <div className="flex flex-col content-between justify-items-start">
              <CardTitle className="mb-2 mt-6">{trip.title}</CardTitle>
              <CardDescription className="">
                {trip.description}
              </CardDescription>
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
      ))}
    </div>
  );
}

export default TravelList;
