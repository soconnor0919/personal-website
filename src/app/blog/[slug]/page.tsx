import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import fs from "fs";
import path from "path";
import { BreadcrumbUpdater } from "~/components/BreadcrumbUpdater";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const contentDir = path.join(process.cwd(), "src/content/blog");
    const files = fs.readdirSync(contentDir);

    return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => ({
            slug: file.replace(".mdx", ""),
        }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    try {
        const { metadata } = await import(`~/content/blog/${slug}.mdx`);
        return metadata;
    } catch (e) {
        return {
            title: "Post Not Found",
        };
    }
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    let Post;
    let metadata;

    try {
        const content = await import(`~/content/blog/${slug}.mdx`);
        Post = content.default;
        metadata = content.metadata;
    } catch (e) {
        notFound();
    }

    return (
        <article className="animate-fade-in-up space-y-8">
            <BreadcrumbUpdater title={metadata.title} />
            <div className="mb-8">
                {/* <Button variant="ghost" asChild className="-ml-4 text-muted-foreground mb-4">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button> */}

                <h1 className="text-3xl font-bold mb-4">{metadata.title}</h1>

                <div className="flex flex-wrap gap-4 items-center text-muted-foreground mb-6">
                    <time dateTime={metadata.publishedAt}>{metadata.publishedAt}</time>
                    {metadata.tags && (
                        <div className="flex flex-wrap gap-2">
                            {metadata.tags.map((tag: string) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <Post />
            </div>
        </article>
    );
}
