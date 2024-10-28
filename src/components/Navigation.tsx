'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Home, FolderGit2, FileText, BookOpenText, Menu, X } from 'lucide-react';

// Define the nav items without icons
const navItems = [
  { href: '/', label: 'About', icon: Home },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/publications', label: 'Publications', icon: BookOpenText },
  { href: '/cv', label: 'CV', icon: FileText },
];

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to manage the navbar toggle

  return (
    <nav className="sticky top-0 z-50 bg-background border-b shadow-sm">
      {/* Static top bar */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <span className="text-lg font-bold">Sean O'Connor</span>
          </Link>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary focus:outline-none relative h-6 w-6"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <Menu size={24} />
              </span>
              <span className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <X size={24} />
              </span>
            </button>
          </div>
          {/* Navigation items for large screens */}
          <div className="hidden lg:flex lg:space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href; // Determine if the item is active
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'} hover:text-primary flex items-center gap-2`}
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated mobile menu */}
      <div 
        className={`
          absolute
          top-full
          left-0
          right-0
          z-40
          bg-background
          border-b
          shadow-sm
          lg:hidden 
          overflow-hidden
          ${isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'}
        `}
      >
        <div className="flex flex-col p-4 space-y-2 bg-background">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center 
                  text-sm font-medium 
                  transition-colors 
                  ${isActive ? 'text-primary' : 'text-muted-foreground'} 
                  hover:text-primary 
                  gap-2
                `}
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
