import ChangePasswordForm from "@/components/form/template/panel/ChangePasswordForm";

import Key from "@/components/svgs/Key";

function ChangePassword() {
    return (
        <div className="xl:w-1/3 space-y-8 py-8 px-4 sm:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <span className="flex items-center gap-x-1 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                <Key className="w-7" />
                بروزرسانی رمز عبور
            </span>
            <ChangePasswordForm />
        </div>
    );
}

export default ChangePassword;
