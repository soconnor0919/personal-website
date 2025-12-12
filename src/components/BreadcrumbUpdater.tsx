"use client";

import { useEffect } from "react";
import { useBreadcrumb } from "~/context/BreadcrumbContext";

export function BreadcrumbUpdater({ title }: { title: string }) {
  const { setCustomTitle } = useBreadcrumb();

  // Use effect to set title on mount and clear on unmount
  useEffect(() => {
    setCustomTitle(title);
    return () => setCustomTitle(null);
  }, [title, setCustomTitle]);

  return null;
}
