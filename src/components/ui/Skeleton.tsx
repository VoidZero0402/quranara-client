import { cn } from "@/libs/cn";

type SkeletonProps = React.ComponentProps<"div">;

function Skeleton({ children, className }: SkeletonProps) {
    return <div className={cn("size-full animate-pulse overflow-hidden", className)}>{children}</div>;
}

export function SkeletonFrame({ className }: SkeletonProps) {
    return <div className={cn("size-full bg-gray-200 dark:bg-gray-800 rounded-lg", className)}></div>;
}

export default Skeleton;
