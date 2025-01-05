import Link from "next/link";

import Button from "@/components/ui/Button";

type ErrorHeaderProps = {
    reset: () => void;
};

function ErrorHeader({ reset }: ErrorHeaderProps) {
    return (
        <div className="pb-8 flex-center">
            <div className="flex flex-col items-center gap-4 text-center max-w-[640px]">
                <h1 className="font-pelak-semibold text-lg sm:text-3xl text-red-500 leading-8">خطایی در پردازش درخواست رخ داده است</h1>
                <p className="text-gray-600 sm:text-lg dark:text-gray-400 whitespace-pre-line sm:leading-8 leading-7">متأسفانه در پردازش درخواست شما مشکلی به وجود آمده است. ممکن است این مشکل موقتی باشد. لطفاً صفحه را دوباره بارگذاری کنید یا در صورت ادامه مشکل، با پشتیبانی تماس بگیرید.</p>
                <div className="flex flex-col xs:flex-row gap-4 w-full mt-4">
                    <Button size="lg" className="xs:w-1/2" onClick={reset}>
                        بارگزاری مجدد صفحه
                    </Button>
                    <Link href="/" className="xs:w-1/2">
                        <Button size="lg" variant="neutral-base" className="w-full">
                            بازگشت به صفحه اصلی
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorHeader;
