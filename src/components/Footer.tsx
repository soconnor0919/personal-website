import React from "react";
import { name, contact } from "~/lib/data";

export function Footer() {
  return (
    <footer className="bg-background pb-4 text-foreground lg:hidden">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            {contact.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 transition-colors hover:text-primary"
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
          <hr className="border-border" />
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {name[0]?.first}&nbsp;
            {name[0]?.last}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
