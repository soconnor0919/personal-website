import React from 'react';
import { name } from '~/lib/data';

export function Footer() {
  return (
    <footer className="lg:hidden bg-background text-foreground pb-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {name[0]?.first}&nbsp;{name[0]?.last}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
