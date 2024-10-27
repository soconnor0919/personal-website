'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "~/lib/utils";

const navItems = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/cv', label: 'CV' },
];

export function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <span className="text-lg font-bold">Sean O'Connor</span>
          </Link>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href 
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
