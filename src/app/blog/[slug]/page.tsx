import { notFound } from "next/navigation";
import { Badge } from "~/components/ui/badge";
import fs from "fs";
import path from "path";
import { BreadcrumbUpdater } from "~/components/BreadcrumbUpdater";

interface BlogPostMetadata {
  title: string;
  publishedAt: string;
  tags?: string[];
  summary?: string;
  image?: string;
}

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
    const { metadata } = (await import(`~/content/blog/${slug}.mdx`)) as {
      metadata: BlogPostMetadata;
    };
    return metadata;
  } catch {
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
    const content = (await import(`~/content/blog/${slug}.mdx`)) as {
      default: React.ComponentType;
      metadata: BlogPostMetadata;
    };
    Post = content.default;
    metadata = content.metadata;
  } catch {
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

        <h1 className="mb-4 text-3xl font-bold">{metadata.title}</h1>

        <div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground">
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

      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <Post />
      </div>
    </article>
  );
}
