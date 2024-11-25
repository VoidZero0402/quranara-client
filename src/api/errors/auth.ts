import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const SignupStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "201",
        message: { text: "ثبت‌نام موفقیت آمیز", caption: "به خانواده قرآن‌آرا خوش اومدی" },
    },

    statuses: {
        "409-otp": { text: "کد تایید منقضی شده", caption: "کد تایید شما منقضی شده، دوباره تلاش کنید" },
        "409-duplicate": { text: "شماره موبایل نامعتبر", caption: "این شماره موبایل از قبل حساب کاربری دارد" },
        "400-otp": { text: "کد تایید نامعتبر", caption: "کد تایید شما معتبر نیست" },
        "400-validation": { text: "اطلاعات نامعتبر", caption: "اطلاعاات شما معتبر نیست" },
        "403": { text: "شماره موبایل محدود شده", caption: "شماره موبایل شما توسط مدیریت محدود شده" },
    },
};

export const SendOtpStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "200",
    },

    statuses: {
        "403": { text: "شماره موبایل محدود شده", caption: "شماره موبایل شما توسط مدیریت محدود شده" },
        "409": { text: "کد تایید ارسال شده", caption: "کد تایید برای شما ارسال شده و هنوز منقضی نشده" },
    },
};

export const LoginWithPasswordStatusOptions: ResponseStatusHandlerOptions = {
    success: {
        status: "200",
        message: { text: "ورود موفقیت آمیز", caption: "به حساب کاربری خودت خوش اومدی" },

    },

    statuses: {
        "403": { text: "شماره موبایل محدود شده", caption: "شماره موبایل شما توسط مدیریت محدود شده" },
        "404": { text: "اطلاعات نامعتبر", caption: "کاربری با این اطلاعات یافت نشد" },
    },
};
