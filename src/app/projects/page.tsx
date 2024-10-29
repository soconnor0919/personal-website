'use client';

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "~/lib/data";
import Image from "next/image";
import { CardSkeleton } from "~/components/ui/skeletons";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="space-y-6">
      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <h1 className="text-2xl font-bold">Featured Projects 🌟</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A selection of my academic and professional projects, focusing on robotics, 
          web development, and embedded systems.
        </p>
      </section>

      <div className="space-y-6">
        {loading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          projects.map((project, index) => (
            <Card key={index}>
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                  <CardHeader className="pb-2">
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
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
                
                {project.image && (
                  <div className="px-6 pb-6 lg:py-6 lg:w-1/3 md:px-24 lg:px-6">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="object-contain w-full h-full"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
