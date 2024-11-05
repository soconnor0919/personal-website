'use client';

import { Sun, Moon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show theme switcher after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the icon to display based on the current theme
  const themeIcon = mounted ? (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />) : <SunMoon size={20} />;

  return (
    <button
      onClick={() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      }}
      className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center"
      aria-label="Toggle theme"
    >
      {themeIcon}
    </button>
  );
}