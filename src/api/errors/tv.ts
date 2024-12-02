import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const LikeTvStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "عملیات موفقیت آمیز", caption: "آموزش به لیست پسندیده‌های شما اضافه شد" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "409": { status: "info", text: "تناقض در سرور", caption: "بنظر میرسد قبلا این آموزش را پسندیده‌اید" },
    },
};

export const DislikeTvStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "عملیات موفقیت آمیز", caption: "آموزش از لیست پسندیده‌های شما حذف شد" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "info", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const SaveTvStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "عملیات موفقیت آمیز", caption: "آموزش به لیست ذخیره‌های شما اضافه شد" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "409": { status: "info", text: "تناقض در سرور", caption: "بنظر میرسد قبلا این آموزش را ذخیره کرده‌اید" },
    },
};

export const UnsaveTvStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "عملیات موفقیت آمیز", caption: "آموزش از لیست ذخیره‌های شما حذف شد" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "info", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
