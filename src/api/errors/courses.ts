import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateCourseStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ایجاد دوره جدید", caption: "دوره جدید با موفقیت ایجاد شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه شناسه دوره از قبل ایجاد شده است" },
    },
};

export const UpdateCourseStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "ویرایش دوره", caption: "دوره با موفقیت ویرایش ایجاد شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه شناسه دوره از قبل ایجاد شده است" },
    },
};

export const ShownCourseStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "تغییر وضعیت موفق", caption: "دوره با موفقیت به وضعیت نمایش درآمد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const UnshownCourseStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "تغییر وضعیت موفق", caption: "دوره با موفقیت به وضعیت عدم نمایش درآمد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
