import Link from "next/link";

import { getPopularTvs } from "@/api/queries/tv";

import Widgets from "@/components/svgs/Widgets";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import LinkRoundAngle from "@/components/svgs/LinkRoundAngle";
import PlayCircle from "@/components/svgs/PlayCircle";
import Plain from "@/components/svgs/Plain";

async function Footer() {
    const { data } = await getPopularTvs();

    return (
        <footer className="py-8 bg-white dark:bg-gray-850 font-pelak-medium">
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-16 py-8">
                    <div className="space-y-4 xl:w-[35%]">
                        <div className="space-y-2">
                            <div className="flex items-center gap-x-1 text-gray-800 dark:text-gray-200">
                                <Widgets className="w-7" />
                                <h3 className="text-lg">درباره آکادمی قرآن‌آرا</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 font-pelak leading-8">دوره‌های آموزشی قرآن‌آرا برای هر سطح و نیاز طراحی شده است. به آسانی با قرآن آشنا شوید و از آموزش‌های مفید بهره‌مند شوید. ما در قرآن‌آرا به شما کمک می‌کنیم تا به ساده‌ترین و موثرترین روش قرآن را یاد بگیرید.</p>
                        </div>
                        <Link href="/about-us" className="flex items-center gap-x-1 text-blue-500">
                            درباره قرآن‌آرا بخوانید
                            <LongArrowLeft />
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row gap-16 xl:w-[45%]">
                        <div className="space-y-4 shrink-0">
                            <span className="flex items-center gap-x-1 text-lg text-gray-800 dark:text-gray-200">
                                <LinkRoundAngle className="w-7" />
                                لینک‌های مفید
                            </span>
                            <div className="space-y-4">
                                <Link href="/courses" className="flex items-center gap-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all">
                                    <span className="w-3 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                                    دوره‌های تخصصی
                                </Link>
                                <Link href="/tv" className="flex items-center gap-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all">
                                    <span className="w-3 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                                    ویدیوهای آموزشی
                                </Link>
                                <Link href="/blog" className="flex items-center gap-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all">
                                    <span className="w-3 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                                    مقالات تخصصی قرآن‌آرا
                                </Link>
                                <Link href="/about-us" className="flex items-center gap-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all">
                                    <span className="w-3 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                                    درباره قرآن‌آرا
                                </Link>
                                <Link href="/terms" className="flex items-center gap-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all">
                                    <span className="w-3 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                                    قوانین و مقررات
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="flex items-center gap-x-1 text-lg text-gray-800 dark:text-gray-200">
                                <PlayCircle className="w-7" />
                                محبوب‌ترین آموزش‌ها
                            </span>
                            <div className="space-y-4">
                                {data.tvs.map((tv) => (
                                    <Link key={tv._id} href={`/tv/${tv.slug}`} className="flex items-center gap-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all">
                                        <span className="shrink-0 w-3 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                                        <span className="line-clamp-1">{tv.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 xl:w-[20%]">
                        <span className="flex items-center gap-x-1 text-lg text-gray-800 dark:text-gray-200">
                            <Plain className="w-7" />
                            ما در شبکه‌های اجتماعی
                        </span>
                        <div className="flex flex-wrap xl:flex-col gap-4">
                            <a href="https://eitaa.com/quranara" target="_blank" data-disable-nprogress={true} className="flex items-center gap-x-2 grow py-2.5 px-4 bg-gray-50 dark:bg-gray-800 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 rounded-xl transition-all">
                                <span className="block size-2 bg-amber-400 rounded-full">
                                    <span className="block size-full bg-amber-400 rounded-full animate-ping"></span>
                                </span>
                                کانال قرآن‌آرا در ایتا
                            </a>
                            <a href="https://instagram.com/quranara.academy" target="_blank" data-disable-nprogress={true} className="flex items-center gap-x-2 grow py-2.5 px-4 bg-gray-50 dark:bg-gray-800 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 rounded-xl transition-all">
                                <span className="block size-2 bg-blue-500 rounded-full">
                                    <span className="block size-full bg-blue-500 rounded-full animate-ping"></span>
                                </span>
                                قرآن‌آرا در اینستاگرام
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 text-gray-800 dark:text-gray-200 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center text-center gap-x-2">
                        <div className="hidden sm:flex-center size-2 bg-blue-500 rounded-full">
                            <div className="size-full bg-blue-500 animate-ping rounded-full"></div>
                        </div>
                        <span className="leading-7">
                            تمامی حقوق محتوای وبسایت متعلق به <span className="text-blue-500 underline">آکادمی قرآن‌آرا</span> می‌باشد
                        </span>
                    </div>
                    <span className="hidden md:block">در قرآن‌آرا منتظر شما هستیم</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
