'use client';

import { Github, Globe, GraduationCap, Linkedin, Mail, Phone, School } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const schoolInfo = [
  {
    icon: School,
    label: 'Bucknell University',
    href: 'https://bucknell.edu'
  },
  {
    label: 'Computer Science and Engineering',
  }
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Personal Email',
    href: 'mailto:sean@soconnor.dev'
  },
  {
    icon: Mail,
    label: 'University Email',
    href: 'mailto:sso005@bucknell.edu'
  },
  {
    icon: Phone,
    label: 'Phone',
    href: 'tel:+16316016555'
  },
  {
    icon: Globe,
    label: 'Website',
    href: 'https://soconnor.dev',
    external: true
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/bu-soconnor',
    external: true
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/soconnor0919',
    external: true
  }
];

export function Sidebar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {/* Mobile layout - only on home page */}
      {isHomePage && (
        <div className="lg:hidden w-full pt-6 pb-2 space-y-4">
          <div className="flex items-center space-x-4">
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
              {schoolInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                  {...(item.href && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xs uppercase text-muted-foreground font-medium">Contact</h3>
            <div className="grid grid-cols-2 gap-2">
              {contactInfo.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  {...(item.external && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop layout - on all pages */}
      <div className="hidden lg:block w-64 p-6">
        <div className="space-y-6">
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
            {schoolInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground flex items-center gap-2 justify-center lg:justify-start"
                {...(item.href && {
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <h3 className="text-xs uppercase text-muted-foreground font-medium mb-2 text-center lg:text-left">Contact</h3>
              <div className="space-y-2">
                {contactInfo.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center lg:justify-start"
                    {...(item.external && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            &copy; 2024&nbsp;Sean&nbsp;O'Connor. All&nbsp;rights&nbsp;reserved.
          </p>
        </div>
      </div>
    </>
  );
}
