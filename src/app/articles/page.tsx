"use client"

import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { CardSkeleton } from "~/components/ui/skeletons";
import { useState, useEffect } from 'react';
import { articles } from '~/lib/data';

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
                    <h1 className="text-2xl font-bold">In the Media 📰</h1>
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
