"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { name, contact, location } from "~/lib/data";
import { Card, CardContent } from "~/components/ui/card";

export function Sidebar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Mobile layout - compressed "who am I" box */}
      <Card className="w-full lg:hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/headshot.png"
                alt={`${name[0]?.first}&nbsp;${name[0]?.last}`}
                width={240}
                height={240}
                className="rounded-xl object-cover"
                priority
              />
            </div>
            <div className="min-w-0 flex-1 space-y-1">
              <h2 className="text-lg font-bold transition-colors hover:text-primary">
                {name[0]?.first}&nbsp;{name[0]?.last}
              </h2>
              <div className="space-y-1">
                {location.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground"
                    {...(item.href && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {item.icon && (
                      <item.icon className="h-3.5 w-3.5 flex-shrink-0" />
                    )}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                {contact.slice(0, 2).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    {...(item.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desktop layout - hidden on mobile */}
      <Card className="hidden h-full lg:block">
        <CardContent className="flex h-full flex-col pt-6">
          <div className="space-y-6">
            <div className="mx-auto max-w-[200px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src="/headshot.png"
                  alt={`${name[0]?.first}&nbsp;${name[0]?.last}`}
                  width={240}
                  height={240}
                  className="rounded-xl object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-center text-xl font-bold transition-colors hover:text-primary">
                {name[0]?.first}&nbsp;{name[0]?.last}
              </h2>
              <div className="space-y-1">
                {location.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground"
                    {...(item.href && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {item.icon && (
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                    )}
                    <span className="text-center leading-tight">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <h3 className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                  Contact
                </h3>
                <div className="space-y-2">
                  {contact.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
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
          </div>

          <div className="mt-auto">
            <hr className="mb-4 border-border" />
            <p className="text-center text-sm text-muted-foreground">
              &copy;&nbsp;{new Date().getFullYear()}&nbsp;{name[0]?.first}
              &nbsp;{name[0]?.last}. All&nbsp;rights&nbsp;reserved.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
