import { Metadata } from "next";
import { projects } from "~/lib/data";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  Eye,
  Keyboard,
  Palette,
  Volume2,
  Globe,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Accessibility,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Features",
  description:
    "An overview of the accessibility features implemented on this website to ensure inclusive user experience.",
};

export default function AccessibilityPage() {
  const project = projects.find((p) => p.title === "Accessibility Features");

  return (
    <div className="space-y-8">
      <section className="animate-fade-in-up prose prose-zinc dark:prose-invert max-w-none">
        <div className="flex items-start gap-3">
          <Accessibility className="h-8 w-8 text-primary" />
          <div>
            <h1 className="mb-2 text-2xl font-bold">{project?.title}</h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          Building an inclusive web experience for all users
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project?.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      {/* Why Accessibility Matters */}
      <section className="animate-fade-in-up-delay-2 space-y-4">
        <h2 className="text-2xl font-bold">Why Accessibility Matters</h2>
        <Card>
          <CardContent className="space-y-4 p-6">
            <p className="text-muted-foreground">
              As a portfolio website aimed at showcasing my technical skills and
              projects to potential employers and collaborators, ensuring
              accessibility is not just a legal or ethical requirement—
              it&apos;s a demonstration of my professional competence and
              inclusive design thinking.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Professional Impact</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Demonstrates technical competence</li>
                  <li>• Shows attention to detail</li>
                  <li>• Reflects inclusive design thinking</li>
                  <li>• Increases potential audience reach</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Academic Responsibility</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Ensures universal access to content</li>
                  <li>• Supports educational equity</li>
                  <li>• Serves as practical skills example</li>
                  <li>• Demonstrates social awareness</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Accessibility Features */}
      <section className="animate-fade-in-up-delay-3 space-y-6">
        <h2 className="text-2xl font-bold">Implemented Features</h2>

        <div className="grid-equal-height grid gap-6 md:grid-cols-2">
          {/* Image Alt Text */}
          <div className="animate-fade-in-up-delay-4 card-hover">
            <Card className="card-full-height">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Image Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-sm text-muted-foreground">
                  All images include descriptive alt text for screen readers
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-4 card-hover">
            <Card className="card-full-height">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Keyboard className="h-5 w-5" />
                  Keyboard Navigation
                </CardTitle>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-sm text-muted-foreground">
                  Full keyboard support for all interactive elements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Additional Features</h2>
        <div className="grid-equal-height grid gap-6 md:grid-cols-2">
          {/* Video Accessibility */}
          <Card className="card-full-height">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Video Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent className="card-content-stretch space-y-3 pt-0">
              <p className="text-sm text-muted-foreground">
                Custom video player with comprehensive accessibility features.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <div className="text-sm">Closed captions with toggle</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <div className="text-sm">Full transcript available</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <div className="text-sm">Keyboard-accessible controls</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Semantic HTML */}
          <Card className="card-full-height">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Semantic Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <p className="text-sm text-muted-foreground">
                Proper HTML structure and ARIA attributes for screen readers.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <div className="text-sm">Logical heading hierarchy</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <div className="text-sm">Semantic HTML elements</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <div className="text-sm">ARIA labels and attributes</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color and Contrast */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Color & Contrast
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <p className="text-sm text-muted-foreground">
                Carefully selected colors ensuring readability for all users.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <div className="text-sm">WCAG AA contrast compliance</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <div className="text-sm">System dark mode support</div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <div className="text-sm">Color-independent information</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Technical Implementation</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Custom Components</CardTitle>
            </CardHeader>
            <CardContent className="card-content-stretch pt-0">
              <p className="mb-3 text-sm text-muted-foreground">
                Built custom accessible components to ensure consistent user
                experience across the site.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded border p-3">
                  <strong className="text-sm">AccessibleVideo</strong>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Video player with captions, transcript, and keyboard
                    navigation
                  </p>
                </div>
                <div className="rounded border p-3">
                  <strong className="text-sm">Image Alt System</strong>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Structured data with imageAlt properties for all project
                    images
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Standards Compliance</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div className="font-medium">WCAG 2.1</div>
                  <div className="text-xs text-muted-foreground">
                    Level AA compliance
                  </div>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    <Keyboard className="h-6 w-6" />
                  </div>
                  <div className="font-medium">Keyboard Navigation</div>
                  <div className="text-xs text-muted-foreground">
                    Full keyboard support
                  </div>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    <Volume2 className="h-6 w-6" />
                  </div>
                  <div className="font-medium">Screen Readers</div>
                  <div className="text-xs text-muted-foreground">
                    Optimized for assistive tech
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Challenges and Limitations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                <div>
                  <h3 className="font-semibold">Next.js Hydration Issues</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Client/server component division created challenges for
                    interactive accessibility features.
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Solution:</strong> Created client-side wrapper
                    components for interactive features while maintaining SSR
                    benefits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                <div>
                  <h3 className="font-semibold">
                    PDF Accessibility Limitations
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    PDF rendering has inherent accessibility challenges for
                    screen readers.
                  </p>
                  <p className="mt-2 text-sm">
                    <strong>Solution:</strong> Provided equivalent information
                    in HTML format throughout the site for users who cannot
                    access PDFs.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Resources */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Accessibility Resources</h2>
        <div className="grid-equal-height grid gap-4 md:grid-cols-2">
          <Card className="card-full-height group cursor-pointer transition-colors hover:bg-accent">
            <Link
              href="https://www.w3.org/WAI/WCAG21/quickref/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4"
            >
              <CardContent className="card-content-stretch p-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">WCAG Quick Reference</div>
                      <div className="text-sm text-muted-foreground">
                        Official guidelines and techniques
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="card-full-height group cursor-pointer transition-colors hover:bg-accent">
            <Link
              href="https://webaim.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4"
            >
              <CardContent className="card-content-stretch p-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Eye className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">WebAIM</div>
                      <div className="text-sm text-muted-foreground">
                        Accessibility testing and resources
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

      {/* Continuous Improvement */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Ongoing Commitment</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Accessibility is not a one-time implementation but an ongoing
                commitment to inclusive design. This site continues to evolve
                with user feedback and updated standards.
              </p>

              <div className="grid-equal-height grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Regular Testing</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Screen reader compatibility testing</li>
                    <li>• Keyboard navigation verification</li>
                    <li>• Color contrast validation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Future Enhancements</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• User preference settings</li>
                    <li>• Enhanced keyboard shortcuts</li>
                    <li>• Voice navigation support</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" className="button-hover">
                  <Link href="/projects">
                    <Eye className="mr-2 h-4 w-4" />
                    View All Projects
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
