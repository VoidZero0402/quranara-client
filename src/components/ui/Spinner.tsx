import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/libs/cn";

const spinner = cva("animate-spin", {
    variants: {
        size: {
            sm: "w-6",
            base: "w-8",
            lg: "w-12",
        },
    },
    defaultVariants: {
        size: "sm",
    },
});

type SpinnerProps = VariantProps<typeof spinner> & { show: boolean } & ComponentProps<"svg">;

function Spinner({ className, show = false, size = "sm", ...props }: SpinnerProps) {
    return (
        show && (
            <svg className={cn(spinner({ size }), className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
        )
    );
}

export default Spinner;
