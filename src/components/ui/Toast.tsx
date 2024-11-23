import { SvgComponentProps } from "@/types/component.types";

import { cn } from "@/libs/cn";

import CheckCircle from "../svgs/CheckCircle";
import DangerCircle from "../svgs/DangerCircle";
import InfoCircle from "../svgs/InfoCircle";

type Status = "success" | "error" | "info";

type StatusProps = { ClassName: string; SvgComponent: React.FC<SvgComponentProps> };

type ToastProps = { text: string; caption: string; status: Status } & React.ComponentProps<"div">;

const toast: Record<Status, StatusProps> = {
    success: { ClassName: "text-teal-600 dark:text-teal-500", SvgComponent: CheckCircle },
    error: { ClassName: "text-red-600 dark:text-red-500", SvgComponent: DangerCircle },
    info: { ClassName: "text-sky-500 dark:text-sky-400", SvgComponent: InfoCircle },
};

function Toast({ text, caption, status = "success", className }: ToastProps) {
    const SvgComponent = toast[status].SvgComponent;

    return (
        <div className={cn("fixed left-2 top-2 flex items-center gap-x-2 p-4 w-[350px] bg-white dark:bg-gray-850 rounded-lg border border-gray-100 dark:border-gray-800", toast[status].ClassName, className)}>
            <div className="shrink-0">
                <SvgComponent className="w-12" />
            </div>
            <div className="space-y-2">
                <span className="font-pelak-medium text-sm">{text}</span>
                <p className="text-xs text-gray-600 dark:text-gray-400">{caption}</p>
            </div>
        </div>
    );
}

export default Toast;
