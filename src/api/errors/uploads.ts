import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const getPreSignedURLStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "400-validation": { status: "error", text: "فرمت نامعتبر", caption: "فرمت فایل آپلودی شما معتبر نیست" },
    },
};
