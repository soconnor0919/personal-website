'use client';

import Image from 'next/image';
import { Mail, Phone, Globe, School, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Sidebar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {/* Mobile layout - only on home page */}
      {isHomePage && (
        <div className="lg:hidden w-full pt-6 pb-2 flex items-center space-x-4">
          <div className="w-24 h-24 relative overflow-hidden rounded-lg">
            <Image
              src="/headshot.png"
              alt="Sean O'Connor"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h2 className="font-bold text-xl hover:text-primary transition-colors">Sean O'Connor</h2>
            <p className="text-sm text-muted-foreground">Computer Science and Engineering</p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <School className="h-4 w-4" />
              Bucknell University
            </p>
          </div>
        </div>
      )}

      {/* Desktop layout - on all pages */}
      <div className="hidden lg:block w-64 p-6 space-y-6">
        <div className="max-w-[240px] mx-auto lg:max-w-none">
          <div className="aspect-square relative overflow-hidden rounded-xl w-full">
            <Image
              src="/headshot.png"
              alt="Sean O'Connor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        <div className="text-center lg:text-left space-y-2">
          <h2 className="font-bold text-xl hover:text-primary transition-colors">Sean O'Connor</h2>
          <p className="text-sm text-muted-foreground">Computer Science and Engineering</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center lg:justify-start">
            <School className="h-4 w-4" />
            Bucknell University
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <h3 className="text-xs uppercase text-muted-foreground font-medium mb-2 text-center lg:text-left">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:sean@soconnor.dev"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center lg:justify-start"
              >
                <Mail className="h-4 w-4" />
                <span>Personal Email</span>
              </a>
              <a 
                href="mailto:sso005@bucknell.edu"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center lg:justify-start"
              >
                <Mail className="h-4 w-4" />
                <span>University Email</span>
              </a>
              <a 
                href="tel:+16316016555"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center lg:justify-start"
              >
                <Phone className="h-4 w-4" />
                <span>Phone</span>
              </a>
              <a 
                href="https://soconnor.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center lg:justify-start"
              >
                <Globe className="h-4 w-4" />
                <span>Website</span>
              </a>
              <a 
                href="https://linkedin.com/in/bu-soconnor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center lg:justify-start"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice for desktop */}
        <div className="hidden lg:block mt-auto pt-6">
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            &copy; 2024&nbsp;Sean&nbsp;O'Connor. All&nbsp;rights&nbsp;reserved.
          </p>
        </div>
      </div>
    </>
  );
}
