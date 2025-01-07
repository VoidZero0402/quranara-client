import Link from "next/link";

import Avatar from "@/components/ui/Avatar";

import VerifiedCheck from "@/components/svgs/VerifiedCheck";

function Teacher() {
    return (
        <div className="space-y-4 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl w-full md:w-1/2 xl:w-full">
            <div className="flex flex-col items-center gap-2">
                <Avatar className="size-20" />
                <Link href="/about-us#founder" className="flex items-center gap-x-1 font-pelak-semibold text-lg text-gray-800 dark:text-gray-200 hover:text-amber-400 dark:hover:text-amber-400 transition-all">
                    استاد حسین خانی
                    <VerifiedCheck strokeWidth={2} />
                </Link>
                <span className="font-pelak-medium text-gray-600 dark:text-gray-400">مدرس دوره</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-7">وقتشه که کمی درباره خودم بگم تا بیشتر با هم آشنا بشیم. من آموزش قرآن رو به صورت حرفه‌ای از 8 سالگی آغاز کردم و به مدت 3 سال مشغول یادگیری روخوانی و روانخوانی قرآن کریم و تجوید و ترتیل بودم.</p>
        </div>
    );
}

export default Teacher;
