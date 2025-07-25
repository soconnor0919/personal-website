"use client";

import * as React from "react";
import { PageLayout } from "~/components/layout/PageLayout";
import { ProjectList } from "~/components/ProjectList";
import { projects } from "~/lib/data";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, Folder } from "lucide-react";
import { CardSkeleton } from "~/components/ui/skeletons";

export default function ProjectsPage() {
  return (
    <PageLayout
      headerProps={{
        title: "Featured Projects",
        description: (
          <>
            A selection of my academic and professional projects, focusing on
            robotics, web development, and embedded systems.
          </>
        ),
        icon: <Folder className="h-5 w-5" />,
        action: (
          <Button asChild variant="default" size="sm">
            <Link href="/projects" className="flex items-center gap-1">
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        ),
      }}
    >
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
