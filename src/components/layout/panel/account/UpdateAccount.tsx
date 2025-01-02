import { getCookieUser } from "@/libs/server/funcs";

import UpdateAccountForm from "@/components/form/template/panel/UpdateAccountForm";

import Transform from "@/components/svgs/Transform";

async function UpdateAccount() {
    const user = await getCookieUser();

    return (
        <div className="xl:w-2/3 space-y-8">
            <span className="flex items-center gap-x-1 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                <Transform className="w-7" />
                بروزرسانی حساب کاربری
            </span>
            <UpdateAccountForm user={user} />
        </div>
    );
}

export default UpdateAccount;
