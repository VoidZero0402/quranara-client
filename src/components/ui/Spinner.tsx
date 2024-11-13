import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/libs/cn";

import SpinnerCircle from "../svgs/SpinnerCircle";

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

type SpinnerProps = VariantProps<typeof spinner> & { show: boolean } & React.ComponentProps<"svg">;

function Spinner({ className, show = false, size = "sm" }: SpinnerProps) {
    return show && <SpinnerCircle className={cn(spinner({ size }), className)} />;
}

export default Spinner;
