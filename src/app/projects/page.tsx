"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, Play, BookOpen, Code } from "lucide-react";
import { projects } from "~/lib/data";
import Image from "next/image";
import { CardSkeleton } from "~/components/ui/skeletons";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Code className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-lg text-muted-foreground">
              A collection of my academic research, professional work, and
              personal projects spanning robotics, web development, and embedded
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Featured Work</h2>
        <div className="space-y-8">
          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative lg:w-2/5">
                      <div className="aspect-[16/10] lg:aspect-square">
                        <Image
                          src={project.image}
                          alt={project.imageAlt || project.title}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover"
                          priority={index === 0}
                        />
                        {project.title === "LaTeX Introduction Tutorial" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="flex h-16 w-16 items-center justify-center bg-white/90 transition-transform hover:scale-110">
                              <Play
                                className="h-8 w-8 text-primary"
                                fill="currentColor"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-base">
                            {project.description}
                          </CardDescription>
                        </div>
                        {project.link && !project.link.startsWith("/") && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 text-muted-foreground transition-colors hover:text-primary"
                          >
                            <ArrowUpRight className="h-5 w-5" />
                          </Link>
                        )}
                      </div>

                      <p className="text-muted-foreground">
                        {project.longDescription}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.link && project.link.startsWith("/") && (
                        <Button asChild>
                          <Link href={project.link}>
                            {project.title === "LaTeX Introduction Tutorial" ? (
                              <>
                                <Play className="mr-2 h-4 w-4" />
                                Watch Tutorial
                              </>
                            ) : (
                              <>
                                <BookOpen className="mr-2 h-4 w-4" />
                                Learn More
                              </>
                            )}
                          </Link>
                        </Button>
                      )}

                      {project.link && !project.link.startsWith("/") && (
                        <Button variant="outline" asChild>
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ArrowUpRight className="mr-2 h-4 w-4" />
                            View Project
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Additional Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {loading ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              otherProjects.map((project, index) => (
                <Card key={index} className="flex flex-col">
                  {project.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        width={400}
                        height={250}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <CardHeader className="p-0">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                        {project.link && !project.link.startsWith("/") && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                      <CardDescription className="mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 p-0 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    {project.link && (
                      <div className="mt-4">
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="w-full"
                        >
                          <Link
                            href={project.link}
                            {...(!project.link.startsWith("/") && {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            })}
                          >
                            {project.link.startsWith("/") ? (
                              <>
                                <BookOpen className="mr-2 h-4 w-4" />
                                Learn More
                              </>
                            ) : (
                              <>
                                <ArrowUpRight className="mr-2 h-4 w-4" />
                                View Project
                              </>
                            )}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))
            )}
          </div>
        </section>
      )}

      {/* Project Stats */}
      <section className="border-t pt-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{projects.length}</div>
              <div className="text-sm text-muted-foreground">
                Total Projects
              </div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">
                {[...new Set(projects.flatMap((p) => p.tags))].length}
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">
                {projects.filter((p) => p.featured).length}
              </div>
              <div className="text-sm text-muted-foreground">Featured</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
