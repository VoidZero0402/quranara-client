import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const AddToCartStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "عملیات موفق", caption: "دوره به سبد خرید شما اضافه شد" },
        "201": { status: "success", text: "عملیات موفق", caption: "دوره به پنل شما اضافه شد" },
        "401": { status: "error", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
        "409": { status: "info", text: "تناقص در سرور", caption: "دوره از قبل در سبد خرید شما وجود دارد" },
    },
};
