import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const AvailableDiscountStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "اعمال تخفیف", caption: "کد تخفیف شما قابل استفاده است" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "کد تخفیف نامعتبر", caption: "کد تخفیف وارد شده نامعتبر است" },
        "403": { status: "error", text: "کد تخفیف منقضی", caption: "کد تخفیف به حداکثر میزان استفاده رسیده" },
    },
};
