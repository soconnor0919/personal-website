'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { name, contact, location } from '~/lib/data';

export function Sidebar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {/* Mobile layout - only on home page */}
      {isHomePage && (
        <div className="lg:hidden w-full pt-6 pb-2 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 relative overflow-hidden rounded-lg">
              <Image
                src="/headshot.png"
                alt={`${name[0]?.first}&nbsp;${name[0]?.last}`}
                width={240}
                height={240}
                className="object-cover rounded-xl"
                priority
              />
            </div>
            <div className="flex flex-col space-y-1">
              <h2 className="font-bold text-xl hover:text-primary transition-colors">{name[0]?.first}&nbsp;{name[0]?.last}</h2>
              {location.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                  {...(item.href && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase text-muted-foreground font-medium">Contact</h3>
            <div className="grid grid-cols-2 gap-2">
              {contact.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer"
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

      {/* Desktop layout - on all pages */}
      <div className="hidden lg:block w-64 p-6">
        <div className="space-y-6">
          <div className="max-w-[240px] mx-auto lg:max-w-none">
            <div className="aspect-square relative overflow-hidden rounded-xl w-full">
              <Image
                src="/headshot.png"
                alt={`${name[0]?.first}&nbsp;${name[0]?.last}`}
                width={240}
                height={240}
                className="object-cover rounded-xl"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j..."
              />
            </div>
          </div>

          <div className="text-center lg:text-left space-y-2">
            <h2 className="font-bold text-xl hover:text-primary transition-colors">{name[0]?.first}&nbsp;{name[0]?.last}</h2>
            {location.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground flex items-center gap-2 justify-center lg:justify-start"
                {...(item.href && {
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <h3 className="text-xs uppercase text-muted-foreground font-medium mb-2 text-center lg:text-left">Contact</h3>
              <div className="space-y-2">
                {contact.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center lg:justify-start"
                    {...(item.external && {
                      target: "_blank",
                      rel: "noopener noreferrer"
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

        <div className="mt-6">
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;{name[0]?.first}&nbsp;{name[0]?.last}. All&nbsp;rights&nbsp;reserved.
          </p>
        </div>
      </div>
    </>
  );
}
