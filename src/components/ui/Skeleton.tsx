import { cn } from "@/libs/cn";

type SkeletonProps = React.ComponentProps<"div">;

function Skeleton({ children, className }: SkeletonProps) {
    return <div className={cn("size-full relative before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-50 dark:before:via-gray-600/50 before:to-transparent isolate overflow-hidden", className)}>{children}</div>;
}

Skeleton.Frame = function ({ className }: SkeletonProps) {
    return <div className={cn("bg-gray-100 dark:bg-gray-800/50 h-4 rounded-lg", className)}></div>;
};

export default Skeleton;
