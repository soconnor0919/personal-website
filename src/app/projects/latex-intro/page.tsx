import { Metadata } from "next";
import { projects } from "~/lib/data";
import { Badge } from "~/components/ui/badge";
import { AccessibleVideo } from "~/components/AccessibleVideo";

export const metadata: Metadata = {
  title: "LaTeX Introduction Tutorial",
  description: "A comprehensive 5-minute introduction to LaTeX document preparation system for beginners.",
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
  // Find the LaTeX project data
  const project = projects.find((p) => p.title === "LaTeX Introduction Tutorial");

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

        <div className="mt-8">
          <AccessibleVideo
            src="/videos/latex-intro.mp4"
            poster="/latex-thumbnail.jpg"
            captionSrc="/videos/latex-intro.vtt"
            title="LaTeX Introduction Tutorial"
            description="A 5-minute introduction to LaTeX, covering basic syntax, document structure, and common use cases."
            transcript={transcript}
            posterAlt="Decorative thumbnail showing LaTeX code and formatting example"
          />
        </div>

        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Why Learn LaTeX?</h2>
          <p>LaTeX is a document preparation system widely used in academia, especially in fields like mathematics, computer science, physics, and engineering. It excels at:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Professional typesetting of mathematical equations</li>
            <li>Consistent document formatting</li>
            <li>Automated handling of citations and references</li>
            <li>Version control compatibility</li>
            <li>Cross-platform document creation</li>
          </ul>
          
          <p>This tutorial provides a gentle introduction to get you started with your first LaTeX document.</p>
          
          <h2 className="text-2xl font-bold tracking-tight">Key Resources</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://www.overleaf.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Overleaf</a> - A popular online LaTeX editor</li>
            <li><a href="https://www.latex-project.org/get/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">LaTeX Project</a> - Official downloads for local installation</li>
            <li><a href="https://en.wikibooks.org/wiki/LaTeX" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">LaTeX Wikibook</a> - Comprehensive reference guide</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 