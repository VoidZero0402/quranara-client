import { ResponseStatusHandlerOptions } from "@/libs/responses";


export const CreateQuestionMessageStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "پرسش شما ایجاد شد", caption: "پرسش شما به مدرس دوره ارجاع داده شد" },
        "400-validation": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
        "403": { status: "error", text: "خطای عدم دسترسی", caption: "شما به پرسش سوال در این جلسه دسترسی ندارید" },
    },
};