"use client";

import {
  BookOpenText,
  FileText,
  FolderGit2,
  Home,
  Menu,
  Newspaper,
  Plane,
  X,
  Accessibility,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";

const navItems = [
  { href: "/", label: "About", icon: Home },
  { href: "/articles", label: "Articles", icon: Newspaper },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  {
    href: "/projects/accessibility",
    label: "Accessibility",
    icon: Accessibility,
  },
  { href: "/publications", label: "Publications", icon: BookOpenText },
  { href: "/travel", label: "Travel", icon: Plane },
  { href: "/cv", label: "CV", icon: FileText },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-[51]">
        <div className="p-6">
          <Card className="bg-background/80 shadow-lg backdrop-blur-sm">
            <CardContent className="px-6 py-3">
              <div className="flex h-10 items-center justify-between">
                <Link href="/" className="transition-colors hover:text-primary">
                  <span className="text-lg font-bold">Sean O&apos;Connor</span>
                </Link>
                <div className="flex items-center space-x-4">
                  <div className="hidden lg:flex lg:justify-end lg:space-x-6">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                            isActive
                              ? "bg-primary/10 text-primary shadow-sm"
                              : "text-muted-foreground hover:bg-primary/5 hover:text-primary",
                          )}
                        >
                          <item.icon size={16} />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-primary/10 hover:text-primary focus:outline-none lg:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                  >
                    <span
                      className={`absolute transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                    >
                      <Menu size={20} />
                    </span>
                    <span
                      className={`absolute transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                    >
                      <X size={20} />
                    </span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed left-6 right-6 top-28 z-50 overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[calc(100vh-8rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Card className="shadow-xl">
          <CardContent className="p-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-muted-foreground hover:bg-primary/5 hover:text-primary",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
