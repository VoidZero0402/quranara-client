import { cn } from "@/libs/cn";

type UnchangeableFieldProps = { value: string; label: string; filedClassName?: string } & React.ComponentProps<"div">;

function UnchangeableField({ children, value, label, className, filedClassName }: UnchangeableFieldProps) {
    return (
        <div className={cn("flex flex-col gap-y-2", className)}>
            <span className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">{label} <span className="font-pelak text-xs text-gray-600 dark:text-gray-400">( غیر قابل تغییر )</span></span>
            <div className="relative text-gray-500">
                <span className={cn("block p-4 w-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-200 border border-gray-100 dark:border-gray-800 rounded-xl transition-colors", filedClassName)}>{value}</span>
                <div className="flex-center absolute left-4 top-0 bottom-0 m-auto">{children}</div>
            </div>
        </div>
    );
}

export default UnchangeableField;
