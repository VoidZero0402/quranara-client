import toast from "react-hot-toast";

import Toast from "@/components/ui/Toast";

import { Response } from "@/types/response.types";

type Status = "success" | "error" | "info";

type StatusMessage = { text: string; caption: string; status: Status };

export type ResponseStatusHandlerOptions = { statuses: Record<string, StatusMessage> };

export function statusHandler(response: Response<any>, options: ResponseStatusHandlerOptions) {
    let key = String(response.status)

    if (response.data?.key) {
        key += `-${response.data.key}`
    }

    const result = options.statuses[key];

    toast.custom((t) => <Toast t={t} {...result} />);

    if (response.status === 500) {
        toast.custom((t) => <Toast t={t} status="error" text="خطای سمت سرور" caption="لطفا چند دقیقه بعد دوباره تلاش کنید" />);
    }
}
