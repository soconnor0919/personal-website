"use client";

import * as React from "react";
import { Suspense } from "react";
import { BreadcrumbWrapper } from "~/components/BreadcrumbWrapper";
import { PageHeader } from "~/components/layout/PageHeader";
import { PageContent } from "~/components/layout/PageContent";
import { PageLayoutSkeleton } from "~/components/layout/PageLayoutSkeleton";

export interface PageLayoutProps {
  headerProps: {
    title: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
  };
  children: React.ReactNode;
  className?: string;
}

/**
 * PageLayout
 * Unifies breadcrumbs, header, and content for all pages.
 * Usage:
 * <PageLayout headerProps={{ title, description, action, icon }}>
 *   ...page content...
 * </PageLayout>
 */
export function PageLayout({
  headerProps,
  children,
  className = "",
}: PageLayoutProps) {
  return (
    <PageContent className={className}>
      <BreadcrumbWrapper />
      <PageHeader {...headerProps} />
      {children}
    </PageContent>
  );
}

export default PageLayout;
