import toast from "react-hot-toast";

import Toast from "@/components/ui/Toast";

type Status = "success" | "error" | "info";

export function showToast(status: Status, text: string, caption: string) {
    toast.custom((t) => <Toast t={t} status={status} text={text} caption={caption} />);
}
