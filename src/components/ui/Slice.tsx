import { cn } from "@/libs/cn";

type SliceProps = React.ComponentProps<"span">;

function Slice({ className }: SliceProps) {
    return <span className={cn("block min-h-[1px] bg-gray-100 dark:bg-gray-700", className)}></span>;
}

export default Slice;
