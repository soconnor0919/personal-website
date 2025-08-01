import { Metadata } from "next";
import { projects } from "~/lib/data";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { AccessibleVideo } from "~/components/AccessibleVideo";
import { ExternalLink, Play, BookOpen, BookOpenText, Code } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LaTeX Introduction Tutorial",
  description:
    "A comprehensive 5-minute introduction to LaTeX document preparation system for beginners.",
};

const transcript = `
<p>Hello, and welcome to getting started with LaTeX. This tutorial will walk you through creating your first document using the LaTeX system.</p>
<p>LaTeX is a typesetting system commonly used for technical and scientific documents. It's widely used throughout the world of academia specifically in engineering and science fields.</p>
<p>This is due to how easy LaTeX makes it for someone to include complex mathematical equations, models and more. Most documents written in math or physics courses here at Bucknell are written using LaTeX.</p>
<p>Throughout this tutorial we'll be utilizing a free LaTeX editor called Overleaf which is available online at overleaf.com.</p>
<p>We'll go through:</p>
<ul>
  <li>Setting up the editor</li>
  <li>Commonly used tags and formatting</li>
  <li>Working with math equations</li>
  <li>Creating a complete document</li>
</ul>
<p>By the end of this tutorial, you'll be able to create your own professional-looking documents with proper formatting and mathematical notation.</p>
`;

export default function LatexTutorialPage() {
  const project = projects.find(
    (p) => p.title === "LaTeX Introduction Tutorial",
  );

  return (
    <div className="space-y-8">
      <section className="animate-fade-in-up prose prose-zinc dark:prose-invert max-w-none">
        <div className="flex items-start gap-3">
          <BookOpenText className="h-8 w-8 text-primary" />
          <div>
            <h1 className="mb-2 text-2xl font-bold">{project?.title}</h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          A beginner-friendly introduction to LaTeX document preparation system
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project?.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="animate-fade-in-up-delay-2 space-y-4">
        <h2 className="text-2xl font-bold">Tutorial Video</h2>
        <Card>
          <CardContent className="p-6">
            <AccessibleVideo
              src="/videos/latex-intro.mp4"
              poster="/latex-thumbnail.jpg"
              captionSrc="/videos/latex-intro.vtt"
              title="LaTeX Introduction Tutorial"
              description="A 5-minute introduction to LaTeX, covering basic syntax, document structure, and common use cases."
              transcript={transcript}
              posterAlt="Decorative thumbnail showing LaTeX code and formatting example"
            />
          </CardContent>
        </Card>
      </section>

      {/* What You'll Learn */}
      <section className="animate-fade-in-up-delay-3 space-y-4">
        <h2 className="text-2xl font-bold">What You&apos;ll Learn</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="animate-fade-in-up-delay-4 card-hover">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Getting Started
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Setting up Overleaf</li>
                  <li>• Basic document structure</li>
                  <li>• Common formatting commands</li>
                  <li>• Creating your first document</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-4 card-hover">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Core Features
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Mathematical equations</li>
                  <li>• Document organization</li>
                  <li>• Bibliography management</li>
                  <li>• Professional typesetting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why LaTeX */}
      <section className="animate-fade-in-up-delay-4 space-y-4">
        <h2 className="text-2xl font-bold">Why LaTeX?</h2>
        <Card>
          <CardContent className="space-y-4 p-6">
            <p className="text-muted-foreground">
              LaTeX is the gold standard for academic and technical document
              preparation, especially in mathematics, computer science, physics,
              and engineering fields.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Academic Excellence</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Professional mathematical typesetting</li>
                  <li>• Consistent document formatting</li>
                  <li>• Automated citations and references</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Technical Benefits</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Version control friendly</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Separation of content and design</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Resources */}
      <section className="animate-fade-in-up-delay-4 space-y-4">
        <h2 className="text-2xl font-bold">Essential Resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="group cursor-pointer transition-colors hover:bg-accent">
            <Link
              href="https://www.overleaf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4"
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Play className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">Overleaf</div>
                      <div className="text-sm text-muted-foreground">
                        Online LaTeX editor
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="group cursor-pointer transition-colors hover:bg-accent">
            <Link
              href="https://www.latex-project.org/get/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4"
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">LaTeX Project</div>
                      <div className="text-sm text-muted-foreground">
                        Official downloads
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="group cursor-pointer transition-colors hover:bg-accent">
            <Link
              href="https://en.wikibooks.org/wiki/LaTeX"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4"
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">LaTeX Wikibook</div>
                      <div className="text-sm text-muted-foreground">
                        Comprehensive guide
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="animate-fade-in-up-delay-4 space-y-4">
        <h2 className="text-2xl font-bold">Next Steps</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Ready to start your LaTeX journey? Here&apos;s what to do next:
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </div>
                  <span className="text-sm">
                    Create a free account on Overleaf
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </div>
                  <span className="text-sm">
                    Watch the tutorial video above
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </div>
                  <span className="text-sm">
                    Practice with a simple document
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    4
                  </div>
                  <span className="text-sm">
                    Explore the LaTeX Wikibook for advanced features
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild>
                  <Link
                    href="https://www.overleaf.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Get Started with Overleaf
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
