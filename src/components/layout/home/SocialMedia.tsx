import Link from "next/link";

import Eitaa from "@/components/svgs/Eitaa";
import Instagram from "@/components/svgs/Instagram";

function SocialMedia() {
    return (
        <section className="space-y-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between p-8 bg-white dark:bg-gray-850 rounded-2xl">
                <div>
                    <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-start">
                        <h3 className="font-pelak-semibold text-2xl text-gray-800 dark:text-gray-200 text-center">قرآن‌آرا را در شبکه‌های اجتماعی دنبال کنید</h3>
                        <p className="text-gray-500 font-pelak-medium">برای دسترسی به محتوای ویژه، نکات قرآنی و آخرین به‌روزرسانی‌ها همراه ما باشید.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4">
                    <Link href="https://instagram.com/quranara.academy" target="_blank" className="flex items-center gap-x-4 justify-between p-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl">
                        <span className="font-pelak-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300">دنبال کردن قرآن‌آرا در اینستاگرام</span>
                        <Instagram className="w-10" />
                    </Link>
                    <Link href="https://eitaa.com/quranara" target="_blank" className="flex items-center gap-x-4 justify-between p-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl">
                        <span className="font-pelak-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300">دنبال کردن قرآن‌آرا در ایتا</span>
                        <Eitaa className="w-10" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default SocialMedia;
