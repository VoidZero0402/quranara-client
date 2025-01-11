import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateBlogStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ایجاد مقاله جدید", caption: "مقاله جدید با موفقیت ایجاد شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه شناسه مقاله از قبل ایجاد شده است" },
    },
};

export const UpdateBlogStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "ویرایش موفق", caption: "مقاله با موفقیت ویرایش شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه شناسه مقاله از قبل ایجاد شده است" },
    },
};

export const ShownBlogStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "تغییر وضعیت موفق", caption: "مقاله با موفقیت به وضعیت نمایش درآمد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const UnshownBlogStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "تغییر وضعیت موفق", caption: "مقاله با موفقیت به وضعیت عدم نمایش درآمد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const LikeBlogStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "عملیات موفقیت آمیز", caption: "مقاله به لیست پسندیده‌های شما اضافه شد" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسد قبلا این مقاله را پسندیده‌اید" },
    },
};

export const DislikeBlogStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "عملیات موفقیت آمیز", caption: "مقاله از لیست پسندیده‌های شما حذف شد" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const SaveBlogStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "عملیات موفقیت آمیز", caption: "مقاله به لیست ذخیره‌های شما اضافه شد" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسد قبلا این مقاله را ذخیره کرده‌اید" },
    },
};

export const UnsaveBlogStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "عملیات موفقیت آمیز", caption: "مقاله از لیست ذخیره‌های شما حذف شد" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
