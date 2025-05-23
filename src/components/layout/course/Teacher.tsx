import Link from "next/link";

import Avatar from "@/components/ui/Avatar";

import VerifiedCheck from "@/components/svgs/VerifiedCheck";

import { PopulatedUser } from "@/types/user.types";

type TeacherProps = { teacher: PopulatedUser }

function Teacher({ teacher }: TeacherProps) {
    return (
        <div className="space-y-4 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl w-full">
            <div className="flex flex-col items-center gap-2">
                <Avatar src={teacher.profile} className="size-20" />
                <Link href="/about-us" className="flex items-center gap-x-1 font-pelak-semibold text-lg text-gray-800 dark:text-gray-200 hover:text-amber-400 dark:hover:text-amber-400 transition-all">
                    استاد {teacher.username}
                    <VerifiedCheck strokeWidth={2} />
                </Link>
                <span className="font-pelak-medium text-gray-600 dark:text-gray-400">مدرس دوره</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-8">من آموزش قرآن رو به صورت حرفه‌ای از 8 سالگی آغاز کردم و به مدت 3 سال مشغول یادگیری روخوانی و روانخوانی قرآن کریم و تجوید و ترتیل بودم. در 11 سالگی وارد دنیای حفظ قرآن شدم...</p>
        </div>
    );
}

export default Teacher;
