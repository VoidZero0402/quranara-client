import Link from "next/link";

import Button from "@/components/ui/Button";

import DangerCircle from "@/components/svgs/DangerCircle";

type FailProps = { username: string };

function Fail({ username }: FailProps) {
    return (
        <div className="flex flex-col items-center gap-y-4 p-4 xs:p-8 max-w-[480px] bg-white dark:bg-gray-850 xs:rounded-2xl">
            <div className="flex-center size-28 bg-red-500/5 rounded-full">
                <div className="flex-center size-20 p-2 bg-red-500/10 text-red-500 rounded-full">
                    <DangerCircle className="w-20" />
                </div>
            </div>
            <span className="text-red-500 leading-8">
                <span className="font-pelak-semibold">{username} عزیز</span>، متاسفانه خرید با مشکل مواجه شد
            </span>
            <p className="text-gray-800 dark:text-gray-200 leading-8">متأسفیم، مشکلی در پردازش سفارش شما پیش آمده است، لطفاً دوباره تلاش کنید یا با پشتیبانی قرآن‌آرا تماس بگیرید.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
                <Link href="/panel/cart" className="grow">
                    <Button size="lg" variant="filled-primary" className="w-full">
                        مشاهده سبد خرید
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

export default Fail;
