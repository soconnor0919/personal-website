"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Home, ChevronRight, Folder, BookOpen, Newspaper, Plane, FileText } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

interface BreadcrumbItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  isCurrentPage?: boolean;
}

export function PageBreadcrumb() {
  const pathname = usePathname();
  
  // Generate breadcrumb items based on current path
  const breadcrumbItems: BreadcrumbItem[] = [
    {
      href: "/",
      label: "Home",
      icon: <Home className="h-3.5 w-3.5 mr-1" />,
    }
  ];

  // Parse path segments into breadcrumb items
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  if (pathSegments.length > 0) {
    // Build paths incrementally for correct href values
    let currentPath = "";
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLastSegment = index === pathSegments.length - 1;
      
      let label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      let icon;
      
      // Assign appropriate icons based on path
      switch (segment) {
        case 'projects':
          icon = <Folder className="h-3.5 w-3.5 mr-1" />;
          break;
        case 'articles':
          icon = <Newspaper className="h-3.5 w-3.5 mr-1" />;
          break;
        case 'publications':
          icon = <BookOpen className="h-3.5 w-3.5 mr-1" />;
          break;
        case 'travel':
          icon = <Plane className="h-3.5 w-3.5 mr-1" />;
          break;
        case 'cv':
          icon = <FileText className="h-3.5 w-3.5 mr-1" />;
          label = "CV";
          break;
        case 'latex-intro':
          icon = <BookOpen className="h-3.5 w-3.5 mr-1" />;
          label = "LaTeX Tutorial";
          break;
        default:
          icon = <ChevronRight className="h-3.5 w-3.5 mr-1" />;
      }
      
      breadcrumbItems.push({
        href: currentPath,
        label,
        icon,
        isCurrentPage: isLastSegment,
      });
    });
  }

  // Don't show breadcrumbs on the home page
  if (pathname === "/") {
    return null;
  }

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
                  <BreadcrumbLink href={item.href} className="flex items-center">
                    {item.icon}
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
} 