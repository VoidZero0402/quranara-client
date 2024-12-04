import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const getPreSignedURLStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "400": { status: "info", text: "فرمت نامعتبر", caption: "فرمت فایل آپلودی شما معتبر نیست" },
    },
};
