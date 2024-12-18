import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateCategoryStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ایجاد دسته‌بندی جدید", caption: "دسته‌بندی جدید با موفقیت ایجاد شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه دسته‌بندی از قبل وجود داره" },
    },
};
