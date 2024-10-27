import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "~/lib/data";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <h1 className="text-2xl font-bold">Featured Projects</h1>
        <p className="text-lg text-muted-foreground">
          A selection of my academic and professional projects, focusing on robotics, 
          web development, and embedded systems.
        </p>
      </section>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="flex-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    {project.link && (
                      <Link 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
              
              {project.image && (
                <div className="px-6 pb-6 lg:py-6 lg:w-1/3">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
