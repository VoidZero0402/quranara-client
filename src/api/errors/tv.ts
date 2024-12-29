import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateTvStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ایجاد آموزش جدید", caption: "آموزش جدید با موفقیت ایجاد شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه شناسه آموزش از قبل ایجاد شده است" },
    },
};

export const ShownTvStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "تغییر وضعیت موفق", caption: "آموزش با موفقیت به وضعیت نمایش درآمد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const UnshownTvStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "تغییر وضعیت موفق", caption: "آموزش با موفقیت به وضعیت عدم نمایش درآمد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const UpdateTvStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "ویرایش موفق", caption: "آموزش با موفقیت ویرایش شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه شناسه آموزش از قبل ایجاد شده است" },
    },
};

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
