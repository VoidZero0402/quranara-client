import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const UpdateAccountStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "بروزرسانی موفق", caption: "حساب کاربری شما با موفقیت بروزرسانی شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
        "409": { status: "info", text: "نام کاربری مشابه", caption: "نام کاربری جدید شما از قبل استفاده شده است" },
    },
};

export const ChangePasswordStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "بروزرسانی موفق", caption: "رمز عبور شما با موفقیت بروزرسانی شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "409": { status: "error", text: "عدم مطابقت رمز عبور", caption: "رمز عبور قبلی شما صحیح نیست" },
    },
};
