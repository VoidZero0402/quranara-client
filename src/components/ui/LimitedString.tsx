import { limitStringLength } from "@/libs/funcs";
import { cn } from "@/libs/cn";

type LimitedStringProps = {
    text: string;
    limit: number;
} & React.ComponentProps<"span">;

function LimitedString({ text, limit, className = "" }: LimitedStringProps) {
    return (
        <div className="relative">
            <span className={cn("peer cursor-pointer", className)}>{limitStringLength(text, limit)}</span>
            <div className="absolute -top-10 right-0 w-max py-2.5 px-4 bg-white dark:bg-gray-850 font-pelak-medium text-xs text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-800 rounded-lg opacity-0 peer-hover:opacity-100 transition-all">{text}</div>
        </div>
    );
}

export default LimitedString;
