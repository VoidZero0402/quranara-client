import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateNewsStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ایجاد خبر جدید", caption: "خبر جدید با موفقیت ایجاد شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
    },
};

export const UpdateNewsStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "ویرایش موفق", caption: "خبر با موفقیت ویرایش شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const RemoveNewsStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "حذف خبر", caption: "خبر با موفقیت حذف شد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const ShownNewsStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "تغییر وضعیت موفق", caption: "خبر با موفقیت به وضعیت نمایش درآمد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const UnshownNewsStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "تغییر وضعیت موفق", caption: "خبر با موفقیت به وضعیت عدم نمایش درآمد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
