import { ResponseStatusHandlerOptions } from "@/libs/responses";

export const AvailableDiscountStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "اعمال تخفیف", caption: "کد تخفیف شما قابل استفاده است" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "info", text: "لطفا ابتدا وارد شوید", caption: "ابتدا نیاز به ورود یا ثبت‌نام دارید" },
        "404": { status: "error", text: "کد تخفیف نامعتبر", caption: "کد تخفیف وارد شده نامعتبر است" },
        "403": { status: "error", text: "کد تخفیف منقضی", caption: "کد تخفیف به حداکثر میزان استفاده رسیده" },
    },
};

export const CreateDiscountStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "201": { status: "success", text: "ایجاد کد تخفیف", caption: "کد  تخفیف جدید با موفقیت ایجاد شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه کد تخفیف از قبل وجود داره" },
    },
};

export const UpdateDiscountStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "ویرایش کد تخفیف", caption: "کد تخفیف با موفقیت ویرایش شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
        "409": { status: "error", text: "تناقض در سرور", caption: "بنظر میرسه کد تخفیف از قبل وجود داره" },
    },
};

export const RemoveDiscountStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "حذف کد تخفیف", caption: "کد تخفیف با موفقیت حذف شد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
        "404": { status: "error", text: "مشکل در سرور", caption: "بنظر میرسه مشکلی در سرور پیش اومده" },
    },
};

export const RemoveDiscountAllStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "حذف تخفیفات", caption: "تخفیفات تمام دوره‌ها با موفقیت حذف شد" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
    },
};

export const ApplyDiscountAllStatusOptions: ResponseStatusHandlerOptions = {
    statuses: {
        "200": { status: "success", text: "اعمال تخفیف همگانی", caption: "تخفیف همگانی با موفقیت اعمال شد" },
        "400-validation": { status: "error", text: "اطلاعات نامعتبر", caption: "لطفا اطلاعات معتبر را وارد کنید" },
        "401": { status: "error", text: "عدم دسترسی", caption: "شما به این عملکرد دسترسی ندارید" },
    },
};
