import ChangePasswordForm from "@/components/form/template/panel/ChangePasswordForm";

import Key from "@/components/svgs/Key";

function ChangePassword() {
    return (
        <div className="xl:w-1/3 space-y-8">
            <span className="flex items-center gap-x-1 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                <Key className="w-7" />
                بروزرسانی رمز عبور
            </span>
            <ChangePasswordForm />
        </div>
    );
}

export default ChangePassword;
