import toast from "react-hot-toast";

import Toast from "@/components/ui/Toast";

import { Response } from "@/types/response.types";

type StatusMessage = { text: string; caption: string };

type SuccessStatus = { status: string; message?: StatusMessage };

export type ResponseStatusHandlerOptions = { success: SuccessStatus; statuses: Record<string, StatusMessage> };

export function statusHandler(response: Response<any>, options: ResponseStatusHandlerOptions) {
    if (String(response.status) === options.success.status) {
        if (options.success.message) {
            toast.custom((t) => <Toast t={t} status="success" {...(options.success.message as StatusMessage)} />);
        }
    } else {
        const key = `${response.status}${response.data?.key ? `-${response.data.key}` : ""}`;        
        
        const errors = options.statuses[key];

        toast.custom((t) => <Toast t={t} status="info" {...errors} />);
    }

    if (response.status === 500) {
        toast.custom((t) => <Toast t={t} status="error" text="خطای سمت سرور" caption="لطفا چند دقیقه بعد دوباره تلاش کنید" />);
    }
}
