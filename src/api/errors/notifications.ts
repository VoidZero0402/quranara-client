import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const SeenNotificationStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "بروزرسانی موفق", caption: "اعلان شما به اعلان‌های خوانده شده انتقال یافت" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const SendNotificationOneStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ارسال اعلان", caption: "ارسال اعلان با موفقیت انجام شد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
    },
};
