import { BreadcrumbSkeleton } from "~/components/layout/BreadcrumbSkeleton";
import { Card } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

/**
 * DebugSkeletonPage
 * Renders only skeletons for breadcrumbs, header, and content for layout diagnosis.
 */
export default function DebugSkeletonPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 py-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs skeleton */}
      <BreadcrumbSkeleton />

      {/* Header skeleton */}
      <Card className="mb-6">
        <div className="flex items-center gap-3 p-6">
          <div className="mr-2 h-8 w-8 rounded-full bg-muted" />
          <Skeleton className="h-8 w-1/2" />
        </div>
        <div className="px-6 pb-4">
          <Skeleton className="h-5 w-3/4" />
        </div>
      </Card>

      {/* Page content skeleton */}
      <div className="space-y-6">
        <Card>
          <div className="p-6">
            <Skeleton className="mb-2 h-6 w-1/3" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="mb-2 h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <Skeleton className="mb-2 h-6 w-1/4" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </Card>
      </div>
    </div>
  );
}
