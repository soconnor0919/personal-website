"use client";

import {
  Book,
  BookOpenText,
  Briefcase,
  FileText,
  FolderGit2,
  Home,
  Menu,
  Newspaper,
  Plane,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "About", icon: Home },
  { href: "/blog", label: "Blog", icon: Book },
  { href: "/articles", label: "Articles", icon: Newspaper },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/publications", label: "Publications", icon: BookOpenText },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/travel", label: "Travel", icon: Plane },
  { href: "/cv", label: "CV", icon: FileText },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-[51] rounded-2xl border bg-background/80 backdrop-blur-md shadow-sm transition-all duration-200 ${isOpen ? "border-transparent" : "border-border/60"
          }`}
      >
        <div className="relative px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center py-2">
              <span className="text-xl font-semibold font-heading tracking-tight transition-colors hover:text-primary">
                Sean O&apos;Connor
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex lg:justify-end lg:space-x-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground"} flex items-center gap-2 hover:text-primary`}
                    >
                      <item.icon size={16} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative h-6 w-6 text-gray-500 hover:text-primary focus:outline-none lg:hidden"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <span
                  className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                >
                  <Menu size={24} />
                </span>
                <span
                  className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                >
                  <X size={24} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-200 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed left-4 right-4 top-24 z-50 overflow-hidden rounded-2xl border border-border/50 bg-background/80 backdrop-blur-md shadow-sm transition-all duration-300 lg:hidden ${isOpen ? "max-h-[calc(100vh-8rem)] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col space-y-2 p-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground"
                  } gap-2 hover:text-primary`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
