import { cn } from "@/libs/cn";

type SkeletonProps = React.ComponentProps<"div">;

function Skeleton({ children, className }: SkeletonProps) {
    return <div className={cn("animate-pulse", className)}>{children}</div>;
}

Skeleton.Frame = function ({ className }: SkeletonProps) {
    return <div className={cn("bg-gray-200 dark:bg-gray-800 h-4 rounded-lg", className)}></div>;
};

export default Skeleton;
