import { getCookieUser } from "@/libs/server/funcs";

import UpdateAccountForm from "@/components/form/template/panel/UpdateAccountForm";

import Transform from "@/components/svgs/Transform";

async function UpdateAccount() {
    const user = await getCookieUser();

    return (
        <div className="xl:w-2/3 space-y-8 py-8 px-4 sm:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <span className="flex items-center gap-x-1 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                <Transform className="w-7" />
                بروزرسانی حساب کاربری
            </span>
            <UpdateAccountForm user={user} />
        </div>
    );
}

export default UpdateAccount;
