import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { BookOpen } from "lucide-react";
import fs from "fs";
import path from "path";

// Helper to get blog posts
async function getBlogPosts() {
    const contentDir = path.join(process.cwd(), "src/content/blog");
    const files = fs.readdirSync(contentDir);

    const posts = await Promise.all(
        files
            .filter((file) => file.endsWith(".mdx"))
            .map(async (file) => {
                const slug = file.replace(".mdx", "");
                // Dynamic import to get metadata
                const { metadata } = await import(`~/content/blog/${file}`);
                return {
                    slug,
                    ...metadata,
                };
            })
    );

    return posts.sort((a, b) => {
        if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
        }
        return 1;
    });
}

export const metadata = {
    title: "Blog",
    description: "Thoughts, tutorials, and project deep-dives.",
};

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <div className="space-y-8">
            <section className="animate-fade-in-up prose prose-zinc dark:prose-invert max-w-none">
                <div className="flex items-start gap-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div>
                        <h1 className="mb-2 text-2xl font-bold">Blog</h1>
                    </div>
                </div>
                <p className="mt-2 text-lg text-muted-foreground">
                    Deep dives into my projects, tutorials, and thoughts on technology.
                </p>
            </section>

            <div className="grid gap-6 animate-fade-in-up-delay-2">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block card-hover">
                        <Card className="h-full transition-colors hover:bg-muted/50">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                                        {post.publishedAt}
                                    </span>
                                </div>
                                <CardDescription className="text-base">
                                    {post.summary}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags?.map((tag: string) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
