import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateOrderStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "403": { status: "error", text: "کد تخفیف منقضی", caption: "کد تخفیف به حداکثر میزان استفاده رسیده" },
        "404": { status: "error", text: "کد تخفیف نامعتبر", caption: "کد تخفیف وارد شده نامعتبر است" },
    },
};
