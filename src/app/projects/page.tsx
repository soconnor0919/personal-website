"use client";

import * as React from "react";
import { PageLayout } from "~/components/layout/PageLayout";
import { ProjectList } from "~/components/ProjectList";
import { projects } from "~/lib/data";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import Link from "next/link";
import { ArrowUpRight, Folder, Code, Zap, Users, Globe } from "lucide-react";
import { CardSkeleton } from "~/components/ui/skeletons";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const totalUsers = "1500+";
  const technologiesUsed = [
    "Java",
    "Python",
    "TypeScript",
    "React",
    "ROS2",
    "Docker",
  ];

  return (
    <PageLayout
      headerProps={{
        title: "Things I've Built",
        description: (
          <>
            From research platforms that advance human-robot interaction to
            real-world applications serving thousands of users. Each project
            represents a unique challenge and learning opportunity.
          </>
        ),
        icon: <Folder className="h-5 w-5" />,
      }}
    >
      {/* Project Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="blue-card border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Code className="h-5 w-5" />
              <span className="font-semibold">
                {featuredProjects.length} Projects
              </span>
            </div>
            <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
              Featured Work
            </p>
          </CardContent>
        </Card>

        <Card className="green-card border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <Users className="h-5 w-5" />
              <span className="font-semibold">{totalUsers} Users</span>
            </div>
            <p className="mt-1 text-sm text-green-600 dark:text-green-400">
              Real Impact
            </p>
          </CardContent>
        </Card>

        <Card className="purple-card border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
              <Globe className="h-5 w-5" />
              <span className="font-semibold">Open Source</span>
            </div>
            <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
              Community Driven
            </p>
          </CardContent>
        </Card>

        <Card className="orange-card border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">Research</span>
            </div>
            <p className="mt-1 text-sm text-orange-600 dark:text-orange-400">
              IEEE Published
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Technologies Used */}
      <Card>
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologiesUsed.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Each project pushes me to learn new technologies and tackle
            different challenges—from embedded systems programming to full-stack
            web development.
          </p>
        </CardContent>
      </Card>

      <React.Suspense
        fallback={
          <ProjectList
            projects={[]}
            loading
            skeletonCount={3}
            CardSkeleton={CardSkeleton}
          />
        }
      >
        <ProjectList projects={projects} />
      </React.Suspense>
    </PageLayout>
  );
}
