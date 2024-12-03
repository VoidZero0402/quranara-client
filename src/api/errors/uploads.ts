import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const getPreSignedURLStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "404": { status: "info", text: "فرمت نامعتبر", caption: "فرمت فایل آپلودی شما معتبر نیست" },
    },
};
