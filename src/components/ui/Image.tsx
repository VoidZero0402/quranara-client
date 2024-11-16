"use client";

import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

import { cn } from "@/libs/cn";

import Skeleton, { SkeletonFrame } from "./Skeleton";

type ImageProps = { wrapperClassName?: string } & NextImageProps;

function Image({ wrapperClassName, className, ...props }: ImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn("relative size-full rounded-lg", wrapperClassName)}>
            {isLoading && (
                <Skeleton>
                    <SkeletonFrame className="size-full" />
                </Skeleton>
            )}
            <NextImage className={cn("object-cover size-full opacity-0 transition-opacity duration-300", className, !isLoading && "opacity-100")} onLoad={() => setIsLoading(false)} {...props} />
        </div>
    );
}

export default Image;
