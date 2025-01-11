import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const SignupStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ثبت‌نام موفقیت آمیز", caption: "به خانواده قرآن‌آرا خوش اومدی" },
        "409-otp": { status: "error", text: "کد تایید منقضی شده", caption: "کد تایید شما منقضی شده، دوباره تلاش کنید" },
        "409-duplicate": { status: "error", text: "شماره موبایل نامعتبر", caption: "این شماره موبایل از قبل حساب کاربری دارد" },
        "400-otp": { status: "error", text: "کد تایید نامعتبر", caption: "کد تایید شما معتبر نیست" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "اطلاعات شما معتبر است" },
        "403": { status: "error", text: "شماره موبایل محدود شده", caption: "شماره موبایل شما توسط مدیریت محدود شده" },
    },
};

export const SendOtpStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "کد تایید ارسال شد", caption: "لطفا کد تایید ۵ رقمی را وارد کنید" },
        "403": { status: "error", text: "شماره موبایل محدود شده", caption: "شماره موبایل شما توسط مدیریت محدود شده" },
        "409": { status: "info", text: "کد تایید ارسال شده", caption: "کد تایید برای شما ارسال شده و هنوز منقضی نشده" },
    },
};

export const LoginWithPasswordStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "ورود موفقیت آمیز", caption: "به حساب کاربری خودت خوش اومدی" },
        "403": { status: "error", text: "شماره موبایل محدود شده", caption: "شماره موبایل شما توسط مدیریت محدود شده" },
        "404": { status: "error", text: "اطلاعات نامعتبر", caption: "کاربری با این اطلاعات یافت نشد" },
    },
};

export const LoginWithOtpStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "ورود موفقیت آمیز", caption: "به حساب کاربری خودت خوش اومدی" },
        "409": { status: "error", text: "کد تایید منقضی شده", caption: "کد تایید شما منقضی شده، دوباره تلاش کنید" },
        "400-otp": { status: "error", text: "کد تایید نامعتبر", caption: "کد تایید شما معتبر نیست" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "اطلاعاات شما معتبر نیست" },
        "404": { status: "error", text: "اطلاعات نامعتبر", caption: "کاربری با این اطلاعات یافت نشد" },
    },
};

export const LogoutStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "خروج موفقیت آمیز", caption: "با موفقیت از حسابت خارج شدی" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
    },
};
