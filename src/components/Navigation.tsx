'use client';

import { BookOpenText, FileText, FolderGit2, Home, Menu, Newspaper, Plane, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggler } from '~/components/ThemeToggler';

const navItems = [
  { href: '/', label: 'About', icon: Home },
  { href: '/articles', label: 'Articles', icon: Newspaper },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/publications', label: 'Publications', icon: BookOpenText },
  { href: '/travel', label: 'Travel', icon: Plane },
  { href: '/cv', label: 'CV', icon: FileText },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={`sticky top-0 z-[51] bg-background shadow-sm border-b ${
        isOpen ? 'border-transparent' : 'border-border'
      }`}>
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <span className="text-lg font-bold">Sean O'Connor</span>
            </Link>
            <div className="flex items-center space-x-4">
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
              </div>
              <ThemeToggler />
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
          </div>
        </div>
      </nav>
      <div 
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div 
        className={`fixed top-16 left-0 right-0 z-50 bg-background border-b border-border shadow-sm lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                } hover:text-primary gap-2`}
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
