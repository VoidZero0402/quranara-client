import Link from "next/link";

import LoginWithPasswordForm from "../login/LoginWithPasswordForm";

import Button from "@/components/ui/Button";

function LoginWithPasswordWrapper() {
    return (
        <div className="space-y-8 p-8 sm:p-12 max-w-[480px] w-full bg-white dark:bg-gray-850 rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-100 dark:shadow-none">
            <h3 className="font-pelak-semibold text-2xl text-center text-gray-800 dark:text-gray-200">ورود به قرآن‌آرا با رمز عبور</h3>
            <div className="space-y-4">
                <LoginWithPasswordForm />
                <Link href="/login" className="block">
                    <Button size="lg" variant="neutral-base" className="w-full h-14">
                        ورود با کد تایید
                    </Button>
                </Link>
            </div>
            <p className="text-gray-600 text-sm xs:text-base dark:text-gray-400">
                از قبل حساب کاربری ندارید{" "}
                <Link href="/signup" className="font-pelak-medium text-blue-500">
                    ثبت‌نام کنید
                </Link>
            </p>
        </div>
    );
}

export default LoginWithPasswordWrapper;
