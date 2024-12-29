import Link from "next/link";

import Button from "@/components/ui/Button";

import Layers from "@/components/svgs/Layers";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";

function CreateCourseHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Layers className="w-8" />
                    ایجاد دوره‌ تخصصی جدید
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">دوره‌های قرآن‌آرا رو با بهترین کیفیت بدست دانشجوها برسون!</p>
            </div>
            <Link href="/management-panel/courses">
                <Button size="lg" className="w-full sm:w-max">
                    بازگشت به دوره‌ها
                    <LongArrowLeft />
                </Button>
            </Link>
        </div>
    );
}

export default CreateCourseHeader;
