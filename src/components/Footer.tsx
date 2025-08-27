import React from "react";
import { name } from "~/lib/data";

export function Footer() {
  return (
    <footer className="bg-background pb-4 text-foreground lg:hidden">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {name[0]?.first}&nbsp;
          {name[0]?.last}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
