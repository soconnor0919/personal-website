"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

interface PageHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode; // Button, link, etc.
  icon?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  action,
  icon,
  className = "",
}: PageHeaderProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-primary/10 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 shadow-md",
        className,
      )}
    >
      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5" />
      <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/5" />

      <CardHeader className="relative z-10 flex flex-row items-center justify-between gap-4 pb-4">
        <div className="flex items-center gap-4">
          {icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <span className="text-primary">{icon}</span>
            </div>
          )}
          <CardTitle className="text-3xl font-bold tracking-tight">
            {title}
          </CardTitle>
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </CardHeader>
      {description && (
        <CardDescription className="relative z-10 px-6 pb-6 text-lg leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      )}
    </Card>
  );
}

export default PageHeader;
