import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "~/components/Footer";
import { Navigation } from "~/components/Navigation";
import { Sidebar } from "~/components/Sidebar";
import { BreadcrumbWrapper } from "~/components/BreadcrumbWrapper";
import { PageSkeleton } from "~/components/layout/PageSkeleton";

import { inter } from "~/lib/fonts";
import { description, name } from "~/lib/data";
import "~/styles/globals.css";

export const metadata = {
  title: `${name[0]?.first} ${name[0]?.last}`,
  description: description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        className="flex min-h-screen flex-col bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <Analytics />
        <SpeedInsights />
        <Navigation />
        <div className="flex flex-1">
          <aside className="fixed bottom-0 left-0 top-28 z-10 hidden w-80 pb-6 pl-6 pr-3 lg:block">
            <Sidebar />
          </aside>
          <main className="flex-1 px-6 pb-6 lg:ml-80 lg:pb-6 lg:pt-0">
            {/* Mobile sidebar above content */}
            <div className="mb-6 lg:hidden">
              <Sidebar />
            </div>
            <Suspense fallback={<PageSkeleton />}>{children}</Suspense>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
