import Link from "next/link";

import Button from "@/components/ui/Button";

import Document from "@/components/svgs/Document";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";

function UpdateNewsHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Document className="w-8" />
                    ویرایش خبر
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">تازه‌ترین اخبار قرآن‌آرا رو بدست کاربران علاقه‌مند برسون!</p>
            </div>
            <Link href="/management-panel/news">
                <Button size="lg" className="w-full sm:w-max">
                    بازگشت به اخبار
                    <LongArrowLeft />
                </Button>
            </Link>
        </div>
    );
}

export default UpdateNewsHeader;
