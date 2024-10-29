'use client';

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "~/components/ui/card";
import { CardSkeleton } from "~/components/ui/skeletons";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";

const tripsData = [
    {
        title: "AIChE Annual Student Conference 2024",
        description: "With the funding of Bucknell's chemical engineering department, and an amazing team, I was able to attend the 2024 AIChE Annual Student Conference and compete in the national Chem-E-Car competition.",
        images: ["/trips/asc2024/IMG_2641.png", "/trips/asc2024/IMG_2631.png", "/trips/asc2024/IMG_7987.png"],
        tags: ["Chem-E-Car", "AIChE", "Conference", "Competition"]
    },
    {
        title: "IEEE RO-MAN 2024",
        description: "I got to attend the IEEE RO-MAN 2024 conference in Pasadena, California. It was a great opportunity to present my work on my project HRIStudio, and to network with other researchers and industry professionals.",
        images: ["/trips/roman2024/IMG_3951.png", "/trips/roman2024/IMG_3978.png", "/trips/roman2024/IMG_3946.png"],
        tags: ["RO-MAN", "IEEE", "Conference", "Presentation"]
    },
    {
        title: "ENGR 290: Following da Vinci's Footsteps",
        description: "During the summer of 2024, I went on a study abroad program with about thirty of my peers. We explored Italy and France, following the footsteps of Leonardo da Vinci- evaluating the world through his lenses.",
        images: ["/trips/engr290/insta290.jpg", "/trips/engr290/P1013747.png"],
        tags: ["Italy", "France", "Study Abroad", "Engineering"]
    },
    {
        title: "SCA Specialty Coffee Expo 2024",
        description: "As a member of the executive board of the Bucknell Coffee Society, I was able to attend the Specialty Coffee Association's Specialty Coffee Expo in early 2024, traveling to Chicago, IL.",
        images: ["/trips/sca2024/group.jpeg", "/trips/sca2024/bean.png", "/trips/sca2024/plane.png"],
        tags: ["Coffee Society", "Chicago", "SCA", "Coffee"]
    },
    {
        title: "Formula 1 Gran Premio dell'Emilia Romagna 2024",
        description: "While studying abroad with Bucknell Engineering, we were lucky enough to be within a few hours of the Imola Grand Prix! A group of students went to see the race, and it was an amazing experience.",
        images: ["/trips/imola2024/IMG_2093.png", "/trips/imola2024/IMG_2050.png", "/trips/imola2024/IMG_2066.png"],
        tags: ["Racing", "Formula One", "Italy"]
    },
    {
        title: "Formula 1 British Grand Prix 2024",
        description: "As a semi-recent Formula One fan, I was very excited to have the opportunity to attend the British Grand Prix weekend in 2024. I was able to see every event- marking one of my favorite weekends, probably ever.",
        images: ["/trips/silverstone/_1035852.png", "/trips/silverstone/P1025274.png", "/trips/silverstone/_1035764.png"],
        tags: ["Racing", "Formula One", "Great Britain", "Silverstone"]
    }
];

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
                    tripsData.map((trip, index) => (
                        <Card key={index} className="rounded-lg overflow-hidden">
                            <CardHeader className="p-0">
                                <div className="flex flex-col">
                                    <div className="flex overflow-x-auto space-x-0">
                                        {trip.images.map((image, imgIndex) => (
                                            <div key={imgIndex} className="flex-shrink-0">
                                                <Image
                                                    src={image}
                                                    alt={trip.title}
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