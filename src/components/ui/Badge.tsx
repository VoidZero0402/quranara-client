import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/libs/cn";

const badge = cva("flex items-center gap-x-1 py-1 px-2 rounded-full select-none text-xs", {
    variants: {
        color: {
            primary: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
            secondary: "bg-amber-50 dark:bg-amber-400/10 text-amber-400",
            neutral: "bg-gray-50 dark:bg-gray-500/10 text-gray-600 dark:text-gray-200",
        },
    },
    defaultVariants: {
        color: "neutral",
    },
});

type BadgeProps = VariantProps<typeof badge> & React.ComponentProps<"div">;

function Badge({ children, className, color = "neutral" }: BadgeProps) {
    return <div className={cn(badge({ color }), className)}>{children}</div>;
}

export default Badge;
