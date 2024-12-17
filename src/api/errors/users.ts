import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const SignCourseStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "اهدای دوره", caption: "دوره مدنظر با موفقیت اهدا شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه کاربر از قبل در دوره ثبت‌نام کرده" },
    },
};
