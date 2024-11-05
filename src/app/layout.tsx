import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes"
import { Footer } from "~/components/Footer"
import { Navigation } from "~/components/Navigation"
import { Sidebar } from "~/components/Sidebar"
import { inter } from "~/lib/fonts"
import { description, name } from "~/lib/data";
import "~/styles/globals.css"

export const metadata = {
  title: `${name[0]?.first} ${name[0]?.last}`,
  description: description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <SpeedInsights />
          <Navigation />
          <div className="flex-1">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:gap-12">
                <aside className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto">
                  <Sidebar />
                </aside>
                <main className="flex-1 overflow-y-auto py-8">
                  {children}
                </main>
              </div>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
