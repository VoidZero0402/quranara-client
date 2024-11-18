import { cn } from "@/libs/cn";

type LogoProps = React.ComponentProps<"svg">;

function Logo({ className = "" }: LogoProps) {
    return <div className={cn("h-14 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg", className)}></div>;
}

export default Logo;
