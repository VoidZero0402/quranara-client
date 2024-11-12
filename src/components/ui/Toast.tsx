import { ComponentProps, FC } from "react";

import { SvgComponentProps } from "@/types/components.types";

import { cn } from "@/libs/cn";

import CheckCircle from "../svgs/CheckCircle";
import DangerCircle from "../svgs/DangerCircle";
import InfoCircle from "../svgs/InfoCircle";

type Status = "success" | "error" | "info";

type StatusProps = { ClassName: string; SvgComponent: FC<SvgComponentProps> };

type ToastProps = { text: string; caption: string; status: Status } & ComponentProps<"div">;

const toast: Record<Status, StatusProps> = {
    success: { ClassName: "text-teal-600 dark:text-teal-500", SvgComponent: CheckCircle },
    error: { ClassName: "text-red-600 dark:text-red-500", SvgComponent: DangerCircle },
    info: { ClassName: "text-sky-500 dark:text-sky-400", SvgComponent: InfoCircle },
};

function Toast({ text, caption, status = "success", className, ...props }: ToastProps) {
    const SvgComponent = toast[status].SvgComponent;

    return (
        <div className={cn("flex items-center gap-x-2 p-4 w-[350px] fixed left-2 top-2 bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-100 dark:shadow-gray-900", toast[status].ClassName)} {...props}>
            <div className="shrink-0">
                <SvgComponent className="w-12" />
            </div>
            <div className="space-y-2">
                <span className="font-pelak-medium text-sm">{text}</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">{caption}</p>
            </div>
        </div>
    );
}

export default Toast;
