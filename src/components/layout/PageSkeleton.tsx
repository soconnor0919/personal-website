import { Skeleton } from "~/components/ui/skeleton";
import { Card, CardHeader, CardContent, CardTitle } from "~/components/ui/card";
import { PageContent } from "~/components/layout/PageContent";

/**
 * BreadcrumbSkeleton
 * Skeleton for breadcrumbs bar that matches the real breadcrumbs structure
 */
export function BreadcrumbSkeleton() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="p-4">
        <div className="flex items-center text-sm">
          <div className="inline-flex items-center gap-1.5">
            <div className="flex items-center">
              <Skeleton className="mr-1 h-3.5 w-3.5 rounded-full" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
          <div className="[&>svg]:h-3.5 [&>svg]:w-3.5">
            <Skeleton className="h-3.5 w-3.5" />
          </div>
          <div className="inline-flex items-center gap-1.5">
            <div className="flex items-center">
              <Skeleton className="mr-1 h-3.5 w-3.5 rounded-full" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * PageHeaderSkeleton
 * Skeleton for page header that matches the real PageHeader structure
 */
export function PageHeaderSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4 pb-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <CardTitle>
            <Skeleton className="h-8 w-48" />
          </CardTitle>
        </div>
        <Skeleton className="h-9 w-24" />
      </CardHeader>
      <div className="px-6 pb-4">
        <Skeleton className="h-5 w-96" />
      </div>
    </Card>
  );
}

/**
 * ContentCardSkeleton
 * Skeleton for a typical content card
 */
export function ContentCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5" />
          <CardTitle>
            <Skeleton className="h-6 w-40" />
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-2 h-4 w-5/6" />
        <Skeleton className="mb-2 h-4 w-4/5" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  );
}

/**
 * PageSkeleton
 * Complete page skeleton that renders inside PageContent for perfect spacing match
 */
export function PageSkeleton() {
  return (
    <PageContent>
      <BreadcrumbSkeleton />
      <PageHeaderSkeleton />
      <ContentCardSkeleton />
      <ContentCardSkeleton />
      <ContentCardSkeleton />
    </PageContent>
  );
}

export default PageSkeleton;
