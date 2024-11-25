import Link from "next/link";

import SignupForm from "../form/SignupForm";

function SignupWrapper() {
    return (
        <div className="space-y-8 p-8 sm:p-12 max-w-[480px] w-full bg-white dark:bg-gray-850 rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-100 dark:shadow-none">
            <div className="space-y-2 text-center">
                <h3 className="font-pelak-semibold text-2xl text-gray-800 dark:text-gray-200">به قرآن‌آرا خوش اومدی</h3>
                <p className="font-pelak-medium text-gray-500 leading-7">ما در اینجا کنارتیم تا مسیرت ساده تر و هموار بشه</p>
            </div>
            <SignupForm />
            <p className="text-gray-600 text-sm xs:text-base dark:text-gray-400">
                در صورتی که قبلا ثبت نام کرده‌اید{" "}
                <Link href="/login" className="font-pelak-medium text-blue-500">
                    وارد شوید
                </Link>
            </p>
        </div>
    );
}

export default SignupWrapper;
