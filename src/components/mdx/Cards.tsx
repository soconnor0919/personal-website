import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ExternalLink, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils";

interface CardGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 2 | 3;
}

export function CardGrid({ children, className, cols = 2 }: CardGridProps) {
  return (
    <div
      className={cn(
        "my-6 grid gap-6",
        cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  icon: Icon,
  children,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-sm text-muted-foreground">
        {children}
      </CardContent>
    </Card>
  );
}

interface ResourceCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  href: string;
}

export function ResourceCard({
  title,
  subtitle,
  icon: Icon,
  href,
}: ResourceCardProps) {
  return (
    <Card className="group h-full cursor-pointer transition-colors hover:bg-accent">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4"
      >
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon className="h-6 w-6 text-primary" />
              <div>
                <div className="font-medium">{title}</div>
                <div className="text-sm text-muted-foreground">{subtitle}</div>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

interface InfoCardProps {
  children: React.ReactNode;
  className?: string;
}

export function InfoCard({ children, className }: InfoCardProps) {
  return (
    <Card className={cn("my-6", className)}>
      <CardContent className="space-y-4 p-6">{children}</CardContent>
    </Card>
  );
}
