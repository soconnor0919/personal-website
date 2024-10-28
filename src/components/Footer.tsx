import React from 'react';

export function Footer() {
  return (
    <footer className="lg:hidden bg-background text-foreground pb-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Sean O'Connor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
