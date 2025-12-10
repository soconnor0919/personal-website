
import Script from "next/script";
import type { Metadata } from "next";
import { env } from "~/env";
import { Footer } from "~/components/Footer";
import { Navigation } from "~/components/Navigation";
import { Sidebar } from "~/components/Sidebar";
import { BreadcrumbWrapper } from "~/components/BreadcrumbWrapper";

import { inter, playfair } from "~/lib/fonts";
import { description, name } from "~/lib/data";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: `${name[0]?.first} ${name[0]?.last}`,
  description: description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-screen flex-col bg-background font-sans text-foreground relative"
        suppressHydrationWarning
      >
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <div className="w-[800px] h-[800px] bg-neutral-400/40 dark:bg-neutral-500/30 rounded-full blur-3xl animate-blob"></div>
        </div>

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
        <div className="flex flex-1 pt-24 flex-col lg:flex-row">
          <Sidebar />
          <div className="flex-1 min-w-0 lg:pl-96">
            <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:pl-0 lg:pr-8">
              <main className="pb-8 pt-4">
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
