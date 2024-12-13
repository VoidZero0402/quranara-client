import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const SeenNotificationStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "بروزرسانی موفق", caption: "اعلان شما به اعلان‌های خوانده شده انتقال یافت" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
