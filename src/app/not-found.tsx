import Link from "next/link";
import { PageLayout } from "~/components/layout/PageLayout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import { FileText } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <PageLayout
      headerProps={{
        title: "404 - Not Found",
        description: "Could not find the requested resource.",
        icon: <FileText className="h-5 w-5" />,
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Page Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Sorry, we couldn&apos;t find the page you were looking for.
          </CardDescription>
          <Button asChild variant="default" size="sm" className="mt-6">
            <Link href="/">Return Home</Link>
          </Button>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
