"use client"

import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { CardSkeleton } from "~/components/ui/skeletons";
import { useState, useEffect } from 'react';

const articles = [
    {
        title: "Positively Innovative: Robotics for Good",
        link: "https://magazine.bucknell.edu/issue/fall-2024/robotics-for-good/",
        author: "Kate Willard",
        description: "Sean O’Connor ’26 is using his interest in robotics to fuel forward-thinking research and lead important conversations about the impact robots can have on society.",
        source: "Bucknell Magazine (Fall 2024)"
    },
    {
        title: "Student Story: Sean O'Connor '26, Computer Science and Engineering",
        link: "https://www.bucknell.edu/meet-bucknell/bucknell-stories/student-stories/sean-oconnor-26-computer-science-engineering",
        author: "Sarah Downey",
        description: "At Bucknell, Sean O'Connor '26 is conducting research to improve the ways robots assist, collaborate and coexist with humans.",
        source: "Bucknell Student Stories"
    },
    {
        title: "Shaping the Future: Exploring the Social Impact of Robots",
        link: "https://magazine.bucknell.edu/college-of-engineering/2024-college-report/",
        author: "Bucknell Publications",
        description: "RoboLab provides an environment for scholarly and creative conversations.",
        source: "the Bucknell College of Engineering Report 2024"
    }
    // Add more articles as needed
];

export default function ArticlesPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            await new Promise(resolve => setTimeout(resolve, 0));
            setLoading(false);
        };
        fetchArticles();
    }, []);

    return (
        <div className="space-y-12">
            <section className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold">In the Media 🗞️</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        I have been lucky enough to have a few wonderful articles written about me and my work. Go check them out!
                    </p>
                </div>
                {loading ? (
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                ) : (
                    articles.map((article, index) => (
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
                    ))
                )}
            </section>
        </div>
    );
}
