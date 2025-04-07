'use client';

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "~/components/ui/card";
import { CardSkeleton } from "~/components/ui/skeletons";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
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
            <section className="prose prose-zinc dark:prose-invert max-w-none">
                <h1 className="text-2xl font-bold">My Trips & Events 🌍</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    A collection of memorable trips and events I've attended.
                </p>
            </section>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                        <Card key={index} className="rounded-lg overflow-hidden">
                            <CardHeader className="p-0">
                                <div className="flex flex-col">
                                    <div className="flex overflow-x-auto space-x-0">
                                        {trip.images.map((image, imgIndex) => (
                                            <div key={imgIndex} className="flex-shrink-0">
                                                <Image
                                                    src={image}
                                                    alt={trip.alts && trip.alts[imgIndex] ? trip.alts[imgIndex] : `${trip.title} - image ${imgIndex + 1}`}
                                                    width={250}
                                                    height={200}
                                                    className="object-cover min-h-[200px] max-h-[200px]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col justify-items-start content-between">
                                    <CardTitle className="mt-6 mb-2">{trip.title}</CardTitle>
                                    <CardDescription className="">{trip.description}</CardDescription>
                                    {/* Show badges for tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {trip.tags.map((tag, tagIndex) => (
                                            <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div >
    );
}