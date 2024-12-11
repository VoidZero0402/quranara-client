import Link from "next/link";

import Button from "@/components/ui/Button";

import DoubleCheck from "@/components/svgs/DoubleCheck";

type SuccessProps = { username: string }

function Success({ username }: SuccessProps) {
    return (
        <div className="flex flex-col items-center gap-y-4 p-4 xs:p-8 max-w-[480px] bg-white dark:bg-gray-850 xs:rounded-2xl">
            <div className="flex-center size-28 bg-teal-500/5 rounded-full">
                <div className="flex-center size-20 p-2 bg-teal-500/10 text-teal-500 rounded-full">
                    <DoubleCheck className="w-20" />
                </div>
            </div>
            <span className="text-teal-500 leading-8">
                <span className="font-pelak-semibold">{username} عزیز</span>، خرید شما با موفقیت انجام شد
            </span>
            <p className="text-gray-800 dark:text-gray-200 leading-8">قرآن‌آرا در مسیر پیشرفت و یادگیری شما همراهتان است، از اینکه قرآن‌آرا را انتخاب کردید، سپاسگزاریم.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
                <Link href="/panel/courses" className="grow">
                    <Button size="lg" variant="filled-primary" className="w-full">
                        مشاهده دوره‌های من
                    </Button>
                </Link>
                <Link href="/panel" className="grow">
                    <Button size="lg" variant="neutral-base" className="w-full">
                        بازگشت به پنل کاربری
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Success;
