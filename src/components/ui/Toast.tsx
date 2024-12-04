import { Toast as ToastType } from "react-hot-toast";
import { SvgComponentProps } from "@/types/component.types";

import { cn } from "@/libs/cn";

import CheckCircle from "../svgs/CheckCircle";
import DangerCircle from "../svgs/DangerCircle";
import InfoCircle from "../svgs/InfoCircle";

type Status = "success" | "error" | "info";

type StatusProps = { ClassName: string; SvgComponent: React.FC<SvgComponentProps> };

type ToastProps = { t: ToastType; text: string; caption: string; status: Status } & React.ComponentProps<"div">;

const toast: Record<Status, StatusProps> = {
    success: { ClassName: "text-teal-500 dark:text-teal-500 border-teal-500", SvgComponent: CheckCircle },
    error: { ClassName: "text-red-500 border-red-500", SvgComponent: DangerCircle },
    info: { ClassName: "text-sky-500 dark:text-sky-400 border-sky-500", SvgComponent: InfoCircle },
};

function Toast({ t, text, caption, status = "success", className }: ToastProps) {
    const SvgComponent = toast[status].SvgComponent;

    return (
        <div className={cn("flex items-center gap-x-4 p-4 w-[90%] xs:w-[400px] bg-white dark:bg-gray-850 border-b-2 rounded-2xl z-20", toast[status].ClassName, t.visible ? "animate-enter" : "animate-leave", className)}>
            <div className="shrink-0 hidden xs:flex-center">
                <SvgComponent className="w-12" />
            </div>
            <div className="space-y-2">
                <span className="font-pelak-semibold">{text}</span>
                <p className="font-pelak-medium text-sm text-gray-600 dark:text-gray-400 leading-7">{caption}</p>
            </div>
        </div>
    );
}

export default Toast;
