import { Skeleton } from "~/components/ui/skeleton";

export function BreadcrumbSkeleton() {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2 text-sm">
        {/* Home breadcrumb skeleton */}
        <div className="flex items-center space-x-1">
          <Skeleton className="h-3.5 w-3.5" />
          <Skeleton className="h-4 w-12" />
        </div>

        {/* Separator */}
        <Skeleton className="h-4 w-4" />

        {/* Current page skeleton */}
        <div className="flex items-center space-x-1">
          <Skeleton className="h-3.5 w-3.5" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}
