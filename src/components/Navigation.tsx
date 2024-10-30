'use client';

import { BookOpenText, FileText, FolderGit2, Home, Menu, Moon, Newspaper, Plane, Sun, SunMoon, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define the nav items without icons
const navItems = [
  { href: '/', label: 'About', icon: Home },
  { href: '/articles', label: 'Articles', icon: Newspaper },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/publications', label: 'Publications', icon: BookOpenText },
  { href: '/travel', label: 'Travel', icon: Plane },
  { href: '/cv', label: 'CV', icon: FileText },
];

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only show theme switcher after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update the document title based on the current pathname
  useEffect(() => {
    const currentItem = navItems.find(item => item.href === pathname);
    document.title = currentItem ? `${currentItem.label} - Sean O'Connor` : 'Sean O\'Connor';
  }, [pathname]);

  // Always render a consistent initial state for SSR
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-[51] bg-background border-b border-border shadow-sm">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <span className="text-lg font-bold">Sean O'Connor</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button
                className="ml-4 text-sm font-medium text-muted-foreground hover:text-primary flex items-center"
                aria-label="Toggle theme"
              >
                <SunMoon size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-primary focus:outline-none relative h-6 w-6 lg:hidden"
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
            <div className="hidden lg:flex lg:space-x-4 lg:justify-end">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
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
              <button
                className="ml-4 text-sm font-medium text-muted-foreground hover:text-primary flex items-center"
                aria-label="Toggle theme"
              >
                <SunMoon size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - delayed fade */}
        <div 
          className={`
            absolute
            top-full
            left-0
            right-0
            z-40
            bg-background
            border-b
            border-border
            shadow-sm
            lg:hidden 
            overflow-hidden
            transition-all
            duration-300
            delay-50
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

  // Client-side only code
  const themeIcon = theme === 'dark' ? <Sun size={20} /> : 
                   theme === 'light' ? <Moon size={20} /> : 
                   <SunMoon size={20} />;

  const cycleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  return (
    <>
      {/* Backdrop overlay - faster fade */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Existing nav component */}
      <nav className="sticky top-0 z-[51] bg-background border-b border-border shadow-sm">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <span className="text-lg font-bold">Sean O'Connor</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={cycleTheme}
                className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center lg:hidden"
                aria-label="Toggle theme"
              >
                {themeIcon}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-primary focus:outline-none relative h-6 w-6 lg:hidden"
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
            <div className="hidden lg:flex lg:space-x-4 lg:justify-end">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
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
              <button
                onClick={cycleTheme}
                className="ml-4 text-sm font-medium text-muted-foreground hover:text-primary flex items-center"
                aria-label="Toggle theme"
              >
                {themeIcon}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - delayed fade */}
        <div 
          className={`
            absolute
            top-full
            left-0
            right-0
            z-40
            bg-background
            border-b
            border-border
            shadow-sm
            lg:hidden 
            overflow-hidden
            transition-all
            duration-300
            delay-50
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
    </>
  );
}
