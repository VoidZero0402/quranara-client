import Link from "next/link";

import Button from "@/components/ui/Button";

import PlayCircle from "@/components/svgs/PlayCircle";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";

function UpdateTvHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <PlayCircle className="w-8" />
                    ویرایش آموزش
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">محتوای مفید و بروز رو در قالب آموزش ارائه کن!</p>
            </div>
            <Link href="/management-panel/tvs">
                <Button size="lg" className="w-full sm:w-max">
                    بازگشت به آموزش‌ها
                    <LongArrowLeft />
                </Button>
            </Link>
        </div>
    );
}

export default UpdateTvHeader;
