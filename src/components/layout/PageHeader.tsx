"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";

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
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between gap-4 pb-4">
        <div className="flex items-center gap-3">
          {icon && <span className="text-primary">{icon}</span>}
          <CardTitle className="flex items-center gap-2 text-2xl font-bold">
            {title}
          </CardTitle>
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </CardHeader>
      {description && (
        <CardDescription className="px-6 pb-4 text-lg text-muted-foreground">
          {description}
        </CardDescription>
      )}
    </Card>
  );
}

export default PageHeader;
