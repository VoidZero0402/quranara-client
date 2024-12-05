import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const CreateCommentStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ثبت دیدگاه جدید", caption: "دیدگاه شما با موفقیت ثبت شد" },
        "400": { status: "info", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
    },
};
