import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateCommentStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ثبت دیدگاه جدید", caption: "دیدگاه شما با موفقیت ثبت شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
    },
};

export const AnswerCommentStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ثبت پاسخ", caption: "پاسخ شما با موفقیت ثبت شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
    },
};

export const AcceptCommentStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "تایید دیدگاه", caption: "دیدگاه با موفقیت تایید شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const RejectCommentStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "رد دیدگاه", caption: "دیدگاه با موفقیت رد شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const PinCommentStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "پین دیدگاه", caption: "دیدگاه با موفقیت پین شد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const UnpinCommentStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "لغو پین دیدگاه", caption: "دیدگاه با موفقیت لغو پین شد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const CheckRepliesCommentStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "ذخیره موفق", caption: "تغییرات دیدگاه با موفقیت ذخیره شد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
