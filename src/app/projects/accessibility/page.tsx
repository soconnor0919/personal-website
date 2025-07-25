import { Metadata } from "next";
import { projects } from "~/lib/data";
import { Badge } from "~/components/ui/badge";
import { Suspense } from "react";

import { PageLayout } from "~/components/layout/PageLayout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import {
  Accessibility,
  Eye,
  Users,
  Code,
  Video,
  Palette,
  CheckCircle,
  AlertTriangle,
  Globe,
} from "lucide-react";

export default function AccessibilityPage() {
  // Find the Accessibility project data
  const project = projects.find(
    (p) => p.title === "Web Accessibility Implementation",
  );

  return (
    <PageLayout
      headerProps={{
        title: "Building an Inclusive Web Experience",
        description:
          "A comprehensive look at the accessibility features implemented across this website to ensure everyone can access and enjoy the content.",
        icon: <Accessibility className="h-5 w-5" />,
      }}
    >
      <Suspense>
        {/* Overview Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="blue-card border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Globe className="h-5 w-5" />
                <span className="font-semibold">WCAG 2.1 AA</span>
              </div>
              <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
                Standards Compliant
              </p>
            </CardContent>
          </Card>

          <Card className="green-card border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <Users className="h-5 w-5" />
                <span className="font-semibold">Universal Design</span>
              </div>
              <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                Inclusive for Everyone
              </p>
            </CardContent>
          </Card>

          <Card className="purple-card border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                <Code className="h-5 w-5" />
                <span className="font-semibold">Semantic HTML</span>
              </div>
              <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
                Screen Reader Friendly
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <CardTitle>Why Accessibility Matters</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-lg">
              As a developer, implementing accessibility isn&apos;t just about
              compliance—it&apos;s about creating technology that truly serves
              everyone. Here&apos;s why I prioritize accessible design:
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Universal Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensuring my work reaches everyone, including the 15% of
                      the global population with disabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Better UX for All</h4>
                    <p className="text-sm text-muted-foreground">
                      Accessible design often improves usability for everyone,
                      not just those with disabilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Technical Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      Demonstrates attention to detail and comprehensive
                      understanding of web standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Future-Proof Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Semantic, well-structured code that works across devices
                      and assistive technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-500" />
                <CardTitle>Image Accessibility</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                Every image tells a story—here&apos;s how I make sure everyone
                can hear it:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Descriptive Alt Text:</strong> Project screenshots
                    include detailed descriptions of UI elements and
                    functionality
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Decorative Images:</strong> Properly marked
                    thumbnails that don&apos;t clutter screen reader navigation
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Consistent Approach:</strong> Custom data structure
                    ensures no image is left without proper description
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-500" />
                <CardTitle>Video Accessibility</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>My LaTeX tutorial video goes beyond basic accessibility:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Closed Captions:</strong> Toggle-able captions for
                    deaf and hard-of-hearing users
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Full Transcript:</strong> Complete text version for
                    alternative consumption
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Keyboard Controls:</strong> Full functionality
                    without requiring a mouse
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-green-500" />
                <CardTitle>Semantic Structure</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>Clean, meaningful HTML that assistive technologies love:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Logical Heading Hierarchy:</strong> Proper h1-h6
                    structure for easy navigation
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Semantic Elements:</strong> nav, main, section,
                    article elements provide context
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>ARIA Attributes:</strong> Enhanced semantics for
                    complex UI components
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-orange-500" />
                <CardTitle>Visual Design</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                Beautiful design that doesn&apos;t compromise on accessibility:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>WCAG AA Contrast:</strong> 4.5:1 ratio for normal
                    text, 3:1 for large text
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Dark Mode Support:</strong> Respects user
                    preferences and reduces eye strain
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500" />
                  <div>
                    <strong>Focus Indicators:</strong> Clear visual feedback for
                    keyboard navigation
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <CardTitle>Challenges & Solutions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Building accessible features in modern frameworks comes with
              unique challenges. Here&apos;s how I&apos;ve addressed them:
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950/20">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
                  Next.js Hydration Issues
                </h4>
                <p className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <strong>Challenge:</strong> Server/client component boundaries
                  can break interactive accessibility features.
                </p>
                <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                  <strong>Solution:</strong> Created dedicated client-side
                  wrapper components for interactive elements while maintaining
                  server-side rendering for content.
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                  PDF Accessibility Limitations
                </h4>
                <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                  <strong>Challenge:</strong> PDF viewers have inconsistent
                  accessibility support across devices.
                </p>
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                  <strong>Solution:</strong> Provide equivalent HTML content
                  alongside PDFs, ensuring no information is PDF-only.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold">
                Accessibility is an Ongoing Journey
              </h3>
              <p className="mb-4 text-muted-foreground">
                I&apos;m committed to continuously improving the accessibility
                of my work. Have suggestions or notice something I could
                improve?
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">WCAG 2.1 AA</Badge>
                <Badge variant="outline">Semantic HTML</Badge>
                <Badge variant="outline">Keyboard Navigation</Badge>
                <Badge variant="outline">Screen Reader Tested</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </Suspense>
    </PageLayout>
  );
}
