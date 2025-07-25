import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, Play, BookOpen } from "lucide-react";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  link?: string;
}

export interface ProjectListProps {
  projects: Project[];
  loading?: boolean;
  skeletonCount?: number;
  CardSkeleton?: React.ComponentType;
}

export function ProjectList({
  projects,
  loading = false,
  skeletonCount = 3,
  CardSkeleton,
}: ProjectListProps) {
  // Default skeleton if not provided
  const Skeleton = CardSkeleton
    ? CardSkeleton
    : () => (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="h-6 w-1/3 rounded bg-primary/10" />
              <div className="h-5 w-5 rounded-full bg-primary/10" />
            </div>
            <div className="mt-2 h-4 w-full rounded bg-primary/10" />
          </CardHeader>
          <CardContent>
            <div className="h-4 w-full rounded bg-primary/10" />
            <div className="mt-2 h-4 w-5/6 rounded bg-primary/10" />
            <div className="mt-4 flex gap-2">
              <div className="h-5 w-16 rounded bg-primary/10" />
              <div className="h-5 w-16 rounded bg-primary/10" />
              <div className="h-5 w-16 rounded bg-primary/10" />
            </div>
          </CardContent>
        </Card>
      );

  if (loading) {
    return (
      <div className="space-y-6">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <Card key={index}>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{project.title}</CardTitle>
                  {project.link && !project.link.startsWith("/") && (
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
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {project.longDescription && (
                  <p className="text-sm text-muted-foreground">
                    {project.longDescription}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {project.link && project.link.startsWith("/") && (
                <CardFooter className="pt-0">
                  <Link href={project.link}>
                    <Button variant="default" size="sm" className="mt-0">
                      {project.title === "LaTeX Introduction Tutorial" ? (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Watch the LaTeX tutorial
                        </>
                      ) : (
                        <>
                          <BookOpen className="mr-2 h-4 w-4" />
                          View project details
                        </>
                      )}
                    </Button>
                  </Link>
                </CardFooter>
              )}
            </div>

            {project.image && (
              <div className="px-6 pb-6 md:px-24 lg:w-1/3 lg:px-6 lg:py-6">
                <Link
                  href={
                    project.link?.startsWith("/")
                      ? project.link
                      : project.link || "#"
                  }
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md transition-all hover:opacity-90">
                    <Image
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                      priority={index === 0}
                    />
                    {project.title === "LaTeX Introduction Tutorial" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="rounded-full bg-white/80 p-3">
                          <Play
                            className="h-8 w-8 text-primary"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ProjectList;
