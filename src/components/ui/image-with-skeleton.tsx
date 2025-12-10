"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Skeleton } from "~/components/ui/skeleton";
import { cn } from "~/lib/utils";

interface ImageWithSkeletonProps extends ImageProps {
    containerClassName?: string;
}

export function ImageWithSkeleton({
    className,
    containerClassName,
    onLoad,
    ...props
}: ImageWithSkeletonProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            {isLoading && <Skeleton className="absolute inset-0 h-full w-full" />}
            <Image
                className={cn(
                    "duration-700 ease-in-out",
                    isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
                    className
                )}
                onLoad={(e) => {
                    setIsLoading(false);
                    if (onLoad) onLoad(e);
                }}
                {...props}
            />
        </div>
    );
}
