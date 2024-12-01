import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const LikeTvStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "201",
        message: { text: "عملیات موفقیت آمیز", caption: "آموزش به لیست پسندیده‌های شما اضافه شد" },
    },

    statuses: {
        "401": { text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "409": { text: "تناقض در سرور", caption: "بنظر میرسد قبلا این آموزش را پسندیده‌اید" },
    },
};

export const DislikeTvStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "200",
        message: { text: "عملیات موفقیت آمیز", caption: "آموزش از لیست پسندیده‌های شما حذف شد" },
    },

    statuses: {
        "401": { text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const SaveTvStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "201",
        message: { text: "عملیات موفقیت آمیز", caption: "آموزش به لیست ذخیره‌های شما اضافه شد" },
    },

    statuses: {
        "401": { text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "409": { text: "تناقض در سرور", caption: "بنظر میرسد قبلا این آموزش را ذخیره کرده‌اید" },
    },
};

export const UnsaveTvStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "200",
        message: { text: "عملیات موفقیت آمیز", caption: "آموزش از لیست ذخیره‌های شما حذف شد" },
    },

    statuses: {
        "401": { text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
