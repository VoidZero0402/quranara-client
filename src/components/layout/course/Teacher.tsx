import Link from "next/link";

import Avatar from "@/components/ui/Avatar";

import VerifiedCheck from "@/components/svgs/VerifiedCheck";

function Teacher() {
    return (
        <div className="space-y-4 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl w-full md:w-1/2 xl:w-full">
            <div className="flex flex-col items-center gap-2">
                <Avatar className="size-20" />
                <Link href="/about-us" className="flex items-center gap-x-1 font-pelak-semibold text-lg text-gray-800 dark:text-gray-200 hover:text-amber-400 dark:hover:text-amber-400 transition-all">
                    استاد حسین خانی
                    <VerifiedCheck strokeWidth={2} />
                </Link>
                <span className="font-pelak-medium text-gray-600 dark:text-gray-400">مدرس دوره</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-7">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی سطرآنچنان که لازم است</p>
        </div>
    );
}

export default Teacher;
