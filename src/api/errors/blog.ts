import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const LikeBlogStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "201",
        message: { text: "عملیات موفقیت آمیز", caption: "مقاله به لیست پسندیده‌های شما اضافه شد" },
    },

    statuses: {
        "401": { text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "409": { text: "تناقض در سرور", caption: "بنظر میرسد قبلا این مقاله را پسندیده‌اید" },
    },
};

export const DislikeBlogStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "200",
        message: { text: "عملیات موفقیت آمیز", caption: "مقاله از لیست پسندیده‌های شما حذف شد" },
    },

    statuses: {
        "401": { text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const SaveBlogStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "201",
        message: { text: "عملیات موفقیت آمیز", caption: "مقاله به لیست ذخیره‌های شما اضافه شد" },
    },

    statuses: {
        "401": { text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "409": { text: "تناقض در سرور", caption: "بنظر میرسد قبلا این مقاله را ذخیره کرده‌اید" },
    },
};

export const UnsaveBlogStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "200",
        message: { text: "عملیات موفقیت آمیز", caption: "مقاله از لیست ذخیره‌های شما حذف شد" },
    },

    statuses: {
        "401": { text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
