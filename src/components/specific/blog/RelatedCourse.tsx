import Link from "next/link";

import UserRounded from "@/components/svgs/UserRounded";
import Star from "@/components/svgs/Star";

function RelatedCourse() {
    return (
        <Link href="#" className="group flex flex-col gap-y-4 relative p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="space-y-2">
                <span className="font-pelak-semibold text-sm text-gray-800 dark:text-gray-200 group-hover:text-amber-400 transition-all line-clamp-1">مبانی قرآن و علوم اسلامی</span>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-6 line-clamp-2">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-x-2">
                    <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm blue-light rounded-lg">
                        <UserRounded className="w-4" />
                        <span className="h-4.5">123</span>
                    </div>
                    <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm amber-light rounded-lg">
                        <Star className="w-4" />
                        <span className="h-4.5">5</span>
                    </div>
                </div>
                <span className="py-1 px-2 h-6.5 font-pelak-medium text-xs gray-light rounded-lg">پیش فروش</span>
            </div>
        </Link>
    );
}

export default RelatedCourse;
