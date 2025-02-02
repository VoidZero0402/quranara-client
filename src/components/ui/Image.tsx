"use client";

import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

import { cn } from "@/libs/cn";

import Skeleton, { SkeletonFrame } from "./Skeleton";

type ImageProps = { wrapperClassName?: string } & NextImageProps;

function Image({ wrapperClassName, className, src = "/placeholder.webp", ...props }: ImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn("relative size-full overflow-hidden", wrapperClassName)}>
            {isLoading && (
                <Skeleton>
                    <SkeletonFrame className="size-full" />
                </Skeleton>
            )}
            <NextImage key={src as string} className={cn("size-full object-cover opacity-0 transition-opacity duration-300", className, !isLoading && "opacity-100")} onLoad={() => setIsLoading(false)} src={src} {...props} />
        </div>
    );
}

export default Image;
