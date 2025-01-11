import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const SignCourseStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "اهدای دوره", caption: "دوره مدنظر با موفقیت اهدا شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه کاربر از قبل در دوره ثبت‌نام کرده" },
    },
};

export const BanUserStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "مسدودیت موفق", caption: "کاربر مدنظر با موفقیت مسدود شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const UnbanUserStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "رفع مسدودیت موفق", caption: "کاربر مدنظر با موفقیت رفع مسدودیت شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
