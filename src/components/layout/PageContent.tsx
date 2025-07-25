"use client";

import React from "react";

/**
 * PageContent
 * Wraps all page content in a consistent layout.
 * Ensures spacing, max-width, and responsive padding.
 * Use this as the main wrapper for all page-level content.
 */
export function PageContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full flex-col gap-4 ${className}`}
      data-page-content
    >
      {children}
    </div>
  );
}
