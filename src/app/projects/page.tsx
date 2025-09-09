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
import { ArrowUpRight, Play, BookOpen, FolderGit2, Github } from "lucide-react";
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
      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="flex items-start gap-3">
          <FolderGit2 className="h-8 w-8 text-primary" />
          <div>
            <h1 className="mb-2 text-2xl font-bold">Projects</h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          A collection of my academic research, professional work, and personal
          projects spanning robotics, web development, and embedded systems.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="animate-fade-in-up space-y-6">
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
              <div
                key={index}
                className={`animate-fade-in-up-delay-${Math.min(index + 1, 4)} card-hover`}
              >
                <Card className="overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Project Image */}
                    {project.image && (
                      <div className="lg:w-1/3">
                        <div className="flex items-center justify-center p-4 lg:h-full">
                          <Image
                            src={project.image}
                            alt={project.imageAlt || project.title}
                            width={400}
                            height={300}
                            className="h-auto w-full object-contain"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    )}

                    {/* Project Content */}
                    <div className="card-content-stretch flex flex-1 flex-col p-6">
                      <div className="flex-1 space-y-4">
                        <div>
                          <CardTitle className="break-words text-xl leading-tight">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="mt-2 break-words text-base leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </div>

                        <p className="break-words leading-relaxed text-muted-foreground">
                          {project.longDescription}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="break-words"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2 sm:flex-shrink-0">
                          {project.link && project.link.startsWith("/") && (
                            <Button
                              variant="outline"
                              asChild
                              className="button-hover"
                            >
                              <Link href={project.link}>
                                {project.title ===
                                "LaTeX Introduction Tutorial" ? (
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

                          {project.websiteLink && (
                            <Button
                              variant="outline"
                              asChild
                              className="button-hover"
                            >
                              <Link
                                href={project.websiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ArrowUpRight className="mr-2 h-4 w-4" />
                                Visit Site
                              </Link>
                            </Button>
                          )}

                          {project.gitLink && (
                            <Button
                              variant="outline"
                              asChild
                              className="button-hover"
                            >
                              <Link
                                href={project.gitLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                View Code
                              </Link>
                            </Button>
                          )}

                          {project.link &&
                            !project.link.startsWith("/") &&
                            !project.websiteLink &&
                            !project.gitLink && (
                              <Button
                                variant="outline"
                                asChild
                                className="button-hover"
                              >
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
                  </div>
                </Card>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="animate-fade-in-up space-y-6">
          <h2 className="text-2xl font-bold">Additional Projects</h2>
          <div className="grid-equal-height grid gap-6 md:grid-cols-2">
            {loading ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              otherProjects.map((project, index) => (
                <div
                  key={index}
                  className={`animate-fade-in-up-delay-${Math.min(index + 1, 4)} card-hover`}
                >
                  <Card className="card-full-height flex flex-col">
                    {project.image && (
                      <div className="flex h-48 items-center justify-center p-4">
                        <Image
                          src={project.image}
                          alt={project.imageAlt || project.title}
                          width={400}
                          height={250}
                          className="h-auto max-h-full w-full object-contain"
                        />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-1 flex-col">
                        <CardHeader className="p-0">
                          <div>
                            <CardTitle className="break-words text-lg leading-tight">
                              {project.title}
                            </CardTitle>
                          </div>
                          <CardDescription className="mt-2 break-words leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="flex flex-1 flex-col p-0 pt-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="break-words text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="mt-auto flex gap-2 pt-4">
                            {project.link && project.link.startsWith("/") && (
                              <Button
                                variant="outline"
                                asChild
                                className="button-hover sm:flex-shrink-0"
                              >
                                <Link href={project.link}>
                                  <BookOpen className="mr-2 h-4 w-4" />
                                  Learn More
                                </Link>
                              </Button>
                            )}

                            {project.websiteLink && (
                              <Button
                                variant="outline"
                                asChild
                                className="button-hover sm:flex-shrink-0"
                              >
                                <Link
                                  href={project.websiteLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ArrowUpRight className="mr-2 h-4 w-4" />
                                  Visit Site
                                </Link>
                              </Button>
                            )}

                            {project.gitLink && (
                              <Button
                                variant="outline"
                                asChild
                                className="button-hover sm:flex-shrink-0"
                              >
                                <Link
                                  href={project.gitLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="mr-2 h-4 w-4" />
                                  View Code
                                </Link>
                              </Button>
                            )}

                            {project.link &&
                              !project.link.startsWith("/") &&
                              !project.websiteLink &&
                              !project.gitLink && (
                                <Button
                                  variant="outline"
                                  asChild
                                  className="button-hover sm:flex-shrink-0"
                                >
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
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              ))
            )}
          </div>
        </section>
      )}
    </div>
  );
}
