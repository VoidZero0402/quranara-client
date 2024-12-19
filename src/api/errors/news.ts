import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateNewsStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ایجاد خبر جدید", caption: "خبر جدید با مو فقیت ایجاد شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
    },
};
