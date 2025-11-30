
import Script from "next/script";
import type { Metadata } from "next";
import { env } from "~/env";
import { Footer } from "~/components/Footer";
import { Navigation } from "~/components/Navigation";
import { Sidebar } from "~/components/Sidebar";
import { BreadcrumbWrapper } from "~/components/BreadcrumbWrapper";

import { inter } from "~/lib/fonts";
import { description, name } from "~/lib/data";
import "~/styles/globals.css";

export const metadata: Metadata = {
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
        {env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            defer
            src={
              env.NEXT_PUBLIC_UMAMI_SCRIPT_URL ||
              "https://analytics.umami.is/script.js"
            }
            data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}

        <Navigation />
        <div className="flex flex-1">
          {/* Desktop sidebar - extends to edge */}
          <aside className="hidden overflow-y-auto lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-4rem)]">
            <Sidebar />
          </aside>

          <div className="flex-1">
            {/* Mobile sidebar - horizontal intro bar only on homepage */}
            <div className="px-4 sm:px-6 lg:hidden lg:px-8">
              <Sidebar />
            </div>

            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <main className="py-8">
                <BreadcrumbWrapper />
                {children}
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
