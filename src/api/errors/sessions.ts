import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateSessionStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ایجاد جلسه جدید", caption: "جلسه جدید با موفقیت ایجاد شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const UpdateSessionStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "ویرایش جلسه", caption: "جلسه با موفقیت ویرایش شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
    },
};
