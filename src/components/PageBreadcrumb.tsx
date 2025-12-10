"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  ChevronRight,
  FolderGit2,
  BookOpenText,
  Newspaper,
  Plane,
  FileText,
  Accessibility,
  Briefcase,
  File,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { useBreadcrumb } from "~/context/BreadcrumbContext";

interface BreadcrumbItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  isCurrentPage?: boolean;
}

export function PageBreadcrumb() {
  const pathname = usePathname();
  const { customTitle } = useBreadcrumb();

  // Generate breadcrumb items based on current path
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      href: "/",
      label: "Home",
      icon: <Home className="mr-1 h-3.5 w-3.5" />,
    },
  ];

  // Parse path segments into breadcrumb items
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  if (pathSegments.length > 0) {
    // Build paths incrementally for correct href values
    let currentPath = "";

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLastSegment = index === pathSegments.length - 1;

      let label =
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      let icon;

      // Assign appropriate icons based on path
      switch (segment) {
        case "projects":
          icon = <FolderGit2 className="mr-1 h-3.5 w-3.5" />;
          break;
        case "articles":
          icon = <Newspaper className="mr-1 h-3.5 w-3.5" />;
          break;
        case "blog":
          icon = <Newspaper className="mr-1 h-3.5 w-3.5" />;
          label = "Blog";
          break;
        case "publications":
          icon = <BookOpenText className="mr-1 h-3.5 w-3.5" />;
          label = "Publications";
          break;
        case "travel":
          icon = <Plane className="mr-1 h-3.5 w-3.5" />;
          break;
        case "cv":
          icon = <FileText className="mr-1 h-3.5 w-3.5" />;
          label = "CV";
          break;
        case "experience":
          icon = <Briefcase className="mr-1 h-3.5 w-3.5" />;
          label = "Experience";
          break;
        case "latex-intro":
          icon = <BookOpenText className="mr-1 h-3.5 w-3.5" />;
          label = "LaTeX Tutorial";
          break;
        case "accessibility":
          icon = <Accessibility className="mr-1 h-3.5 w-3.5" />;
          label = "Accessibility";
          break;
        default:
          icon = <File className="mr-1 h-3.5 w-3.5" />;
      }

      // Override label for the last segment if customTitle is available and it's a blog post
      if (isLastSegment && customTitle && pathname.startsWith("/blog/")) {
        label = customTitle;
        // Truncate if too long (e.g., > 30 chars)
        if (label.length > 30) {
          label = label.substring(0, 30) + "...";
        }
      }

      breadcrumbItems.push({
        href: currentPath,
        label,
        icon,
        isCurrentPage: isLastSegment,
      });
    });
  }

  // Show breadcrumbs on all pages including home page

  return (
    <div className="mb-6">
      <Breadcrumb>
        <BreadcrumbList className="flex items-center text-sm">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <BreadcrumbItem>
                {item.isCurrentPage ? (
                  <BreadcrumbPage className="flex items-center">
                    {item.icon}
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={item.href}
                    className="flex items-center"
                  >
                    {item.icon}
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
