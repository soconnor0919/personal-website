"use client";

import dynamic from "next/dynamic";
import { BreadcrumbSkeleton } from "~/components/ui/breadcrumb-skeleton";

// Dynamically import PageBreadcrumb with no SSR to avoid hydration issues
const PageBreadcrumb = dynamic(
  () => import("~/components/PageBreadcrumb").then((mod) => mod.PageBreadcrumb),
  {
    ssr: false,
    loading: () => <BreadcrumbSkeleton />,
  },
);

export function BreadcrumbWrapper() {
  return <PageBreadcrumb />;
}
