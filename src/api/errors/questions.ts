import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateQuestionMessageStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "پرسش شما ایجاد شد", caption: "پرسش شما به مدرس دوره ارجاع داده شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
        "403": { status: "error", text: "خطای عدم دسترسی", caption: "شما به پرسش سوال در این جلسه دسترسی ندارید" },
    },
};

export const AnswerQuestionStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ثبت پاسخ", caption: "پاسخ شما با موفقیت ارسال شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const CloseQuestionStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "عملیات  موفق", caption: "پرسش با موفقیت به وضعیت بسته شده درآمد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};
