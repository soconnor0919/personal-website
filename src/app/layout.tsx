import { inter } from "~/lib/fonts"
import "~/styles/globals.css"
import { Navigation } from "~/components/Navigation"
import { Sidebar } from "~/components/Sidebar"

export const metadata = {
  title: "Sean O'Connor",
  description: "Personal website and portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-sans bg-background text-foreground min-h-screen">
        <Navigation />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-12 py-8">
            <Sidebar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
