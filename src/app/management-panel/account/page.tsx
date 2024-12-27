import UpdateAccount from "@/components/specific/management-panel/account/UpdateAccount";
import ChangePassword from "@/components/specific/management-panel/account/ChangePassword";

import UserRounded from "@/components/svgs/UserRounded";

function Account() {
    return (
        <div className="space-y-8">
            <div className="space-y-2 p-4 sm:p-0">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <UserRounded className="w-8" />
                    جزئیات حساب کاربری
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">حساب کاربری خودت رو شخصی سازی کن، دیگران تو رو با این اطلاعات میشناسن</p>
            </div>
            <div className="flex flex-col xl:flex-row gap-8">
                <UpdateAccount />
                <ChangePassword />
            </div>
        </div>
    );
}

export default Account;
