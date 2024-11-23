"use client";

import { useTheme } from "next-themes";

import useIsMounted from "@/hooks/useIsMounted";

import Button from "@/components/ui/Button";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import Moon from "@/components/svgs/Moon";
import Sun from "@/components/svgs/Sun";

function ToggleTheme() {
    const isMounted = useIsMounted();
    const { theme, setTheme } = useTheme();

    if (!isMounted) {
        return (
            <Skeleton className="size-12 rounded-2xl">
                <SkeletonFrame className="size-full"></SkeletonFrame>
            </Skeleton>
        );
    }

    return (
        <Button size="circle" variant="neutral-base" className="size-12" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon /> : <Sun />}
        </Button>
    );
}

export default ToggleTheme;
