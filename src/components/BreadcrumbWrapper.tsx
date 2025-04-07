"use client";

import dynamic from "next/dynamic";

// Dynamically import PageBreadcrumb with no SSR to avoid hydration issues
const PageBreadcrumb = dynamic(() => import("~/components/PageBreadcrumb").then(mod => mod.PageBreadcrumb), {
  ssr: false,
});

export function BreadcrumbWrapper() {
  return <PageBreadcrumb />;
} 