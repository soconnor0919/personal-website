"use client";

import { usePathname } from "next/navigation";
import { name, contact, location } from "~/lib/data";

import { ImageWithSkeleton } from "~/components/ui/image-with-skeleton";

export function Sidebar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Mobile layout - horizontal intro bar only on home page */}
      {isHomePage && (
        <div className="w-full space-y-4 px-6 pb-2 pt-6 sm:px-8 lg:hidden">
          <div className="flex items-center space-x-4">
            <ImageWithSkeleton
              src="/headshot.png"
              alt={`${name[0]?.first}&nbsp;${name[0]?.last}`}
              width={240}
              height={240}
              containerClassName="h-24 w-24 rounded-2xl border border-border/50 shadow-sm"
              className="object-cover"
              priority
            />
            <div className="flex flex-col space-y-1">
              <h2 className="text-xl font-bold transition-colors hover:text-primary">
                {name[0]?.first}&nbsp;{name[0]?.last}
              </h2>
              {location.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  {...(item.href && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-medium uppercase text-muted-foreground">
              Contact
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {contact.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop layout - clean and elegant sidebar */}
      <div className="fixed bottom-4 left-4 top-24 hidden w-80 overflow-hidden rounded-3xl border border-border/60 bg-background/80 backdrop-blur-xl lg:block">
        <div className="flex h-full flex-col">
          {/* Profile Section */}
          <div className="flex-shrink-0 border-b border-border/50 px-8 py-8">
            <div className="flex flex-col items-center space-y-4">
              <ImageWithSkeleton
                src="/headshot.png"
                alt={`${name[0]?.first} ${name[0]?.last}`}
                width={400}
                height={400}
                containerClassName="h-40 w-40 border border-border/50 rounded-3xl shadow-sm"
                className="h-full w-full object-cover"
                priority
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold tracking-tight">
                  {name[0]?.first} {name[0]?.last}
                </h2>
                {location.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    {...(item.href && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Links Section */}
          <div className="flex-1 px-8 py-6">
            <div className="space-y-1">
              {contact.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="sidebar-contact-link flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 border-t border-border/50 px-8 py-4">
            <p className="text-center text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {name[0]?.first} {name[0]?.last}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
