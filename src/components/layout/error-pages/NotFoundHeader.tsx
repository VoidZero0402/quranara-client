import Link from "next/link";

import Back from "@/components/specific/error-pages/Back";

import Button from "@/components/ui/Button";

function NotFoundHeader() {
    return (
        <div className="pb-8 flex-center">
            <div className="flex flex-col items-center gap-4 text-center max-w-[640px]">
                <h1 className="font-pelak-semibold text-lg sm:text-3xl text-amber-400 leading-8">صفحه‌ای که به دنبال آن هستید، پیدا نشد!</h1>
                <p className="text-gray-600 sm:text-lg dark:text-gray-400 whitespace-pre-line sm:leading-8 leading-7">متأسفیم، صفحه‌ای که به دنبال آن بودید ممکن است حذف شده باشد، آدرس اشتباه وارد شده باشد یا اصلاً وجود نداشته باشد. لطفاً از نوار جستجو استفاده کنید یا به صفحه اصلی بازگردید.</p>
                <div className="flex flex-col xs:flex-row gap-4 w-full mt-4">
                    <Link href="/" className="xs:w-1/2">
                        <Button size="lg" className="w-full">
                            بازگشت به صفحه اصلی
                        </Button>
                    </Link>
                    <Back />
                </div>
            </div>
        </div>
    );
}

export default NotFoundHeader;
