import { Metadata } from "next";
import { projects } from "~/lib/data";
import { Badge } from "~/components/ui/badge";

export const metadata: Metadata = {
  title: "Accessibility Features",
  description: "An overview of the accessibility features implemented on this website to ensure inclusive user experience.",
};

export default function AccessibilityPage() {
  // Find the Accessibility project data
  const project = projects.find((p) => p.title === "Accessibility Features");

  return (
    <div className="container pt-0 pb-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{project?.title}</h1>
          <p className="text-lg text-muted-foreground">{project?.longDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project?.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Why Accessibility Matters</h2>
            <p className="mt-4">
              As a portfolio website aimed at showcasing my technical skills and projects to potential employers and collaborators,
              ensuring accessibility is not just a legal or ethical requirement— it's a demonstration of my professional competence and
              inclusive design thinking. Here's why accessibility is particularly important for my website:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Universal Access:</strong> A portfolio should be accessible to all potential viewers, including
                hiring managers, colleagues, and collaborators who may have disabilities or situational limitations.
              </li>
              <li>
                <strong>Professional Credibility:</strong> As a computer science and engineering student, demonstrating knowledge
                of accessibility standards reflects technical competence and attention to detail that employers value.
              </li>
              <li>
                <strong>Technical Showcase:</strong> Implementing accessibility features serves as a practical example of the technical skills being presented.
              </li>
              <li>
                <strong>Academic Integrity:</strong> In an academic context, ensuring that educational resources
                (like the LaTeX tutorial) are accessible to all students reflects a commitment to educational equity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">Accessibility Features Implemented</h2>
            <div className="space-y-6 mt-4">
              <div>
                <h3 className="text-xl font-semibold">1. Comprehensive Image Alt Text</h3>
                <p className="mt-2">
                  Every image on my website has been carefully evaluated and provided with appropriate alt text. I distinguish between:
                </p>
                <ul className="list-disc pl-6 my-2">
                  <li>
                    <strong>Decorative images:</strong> Images that are purely decorative, such as the LaTeX tutorial thumbnail, have alt text that
                    indicates their decorative nature (e.g., "Decorative thumbnail showing LaTeX code and formatting example").
                  </li>
                  <li>
                    <strong>Informative images:</strong> Images that convey information, such as project screenshots, have detailed alt text
                    describing their content (e.g., "Screenshot of HRIStudio application showing the robot control dashboard on a laptop").
                  </li>
                </ul>
                <strong>Implementation details:</strong> I implemented this by adding custom "imageAlt" properties to all projects
                and "alts" arrays for travel items in my data structure, ensuring consistent image descriptions throughout the site.

              </div>

              <div>
                <h3 className="text-xl font-semibold">2. Accessible Video Player</h3>
                <p className="mt-2">
                  I developed a custom video player for the LaTeX tutorial with several accessibility features:
                </p>
                <ul className="list-disc pl-6 my-2">
                  <li>Closed captions that can be toggled on/off</li>
                  <li>Full transcript available with expandable details element</li>
                  <li>Keyboard-accessible controls for play/pause, volume, and caption toggling</li>
                  <li>ARIA labels for all controls to improve screen reader compatibility</li>
                  <li>Video poster image with appropriate alt text</li>
                </ul>
                <strong>Implementation details:</strong> I created a custom AccessibleVideo component that wraps the HTML5 video element
                with additional accessibility features, including captions integration, keyboard navigation, and proper ARIA attributes.
              </div>

              <div>
                <h3 className="text-xl font-semibold">3. Semantic HTML and ARIA</h3>
                <p className="mt-2">
                  My website uses semantic HTML throughout to ensure proper structure and meaning:
                </p>
                <ul className="list-disc pl-6 my-2">
                  <li>Proper heading hierarchy (h1, h2, h3) for logical document structure</li>
                  <li>Semantic elements like &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, and &lt;article&gt;</li>
                  <li>ARIA attributes for components without native semantics</li>
                  <li>Skip-to-content links for keyboard users</li>
                </ul>
                <strong>Implementation details:</strong> I audited all pages for proper heading structure and added semantic HTML elements. For
                custom components like cards and badges, I ensured proper ARIA attributes were used to convey their purpose and state.
              </div>

              <div>
                <h3 className="text-xl font-semibold">4. Color Contrast and Dark Mode</h3>
                <p className="mt-2">
                  I carefully selected color choices on my website to ensure readability:
                </p>
                <ul className="list-disc pl-6 my-2">
                  <li>All text meets WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text)</li>
                  <li>Dark mode support for users who prefer or require reduced brightness</li>
                  <li>Color is never used as the sole means of conveying information</li>
                  <li>Interactive elements have visual focus indicators that don't rely solely on color</li>
                </ul>
                <strong>Implementation details:</strong> I used the TailwindCSS color palette with careful consideration of contrast ratios.
                The dark mode implementation respects user system preferences and provides consistent contrast ratios in both modes.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight">Platform Limitations and Workarounds</h2>
            <p className="mt-4">
              While building this website, I encountered some limitations in the Next.js framework and implemented workarounds:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Next.js Client/Server Components:</strong> Next.js divides components into client and server components,
                which can create hydration issues when implementing certain interactive accessibility features. I addressed this by
                creating client-side wrapper components for features requiring interactivity, such as the video player and navigation menu.
              </li>
              <li>
                <strong>PDF Accessibility:</strong> The CV section uses PDF rendering which has inherent accessibility limitations.
                As a workaround, I provide the same information in HTML format elsewhere on the site, ensuring that users who cannot
                access the PDF can still view the content.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 