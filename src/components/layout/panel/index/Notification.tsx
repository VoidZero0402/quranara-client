import Button from "@/components/ui/Button";

import BellOff from "@/components/svgs/BellOff";

function Notification() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-gray-850 sm:rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-center shrink-0 size-16 gray-light rounded-full">
                    <BellOff className="w-8" />
                </div>
                <div className="space-y-2 text-center sm:text-start">
                    <span className="font-pelak-medium text-gray-800 dark:text-gray-200 line-clamp-1">به آکادمی قرآن‌آرا خوش آمدید!</span>
                    <p className="text-gray-600 dark:text-gray-400 leading-7 line-clamp-3 sm:line-clamp-2">خوشحالیم که اینجا هستید! در این آکادمی تلاش کرده‌ایم تا تجربه‌ای متفاوت و مفید را برای شما فراهم کنیم.</p>
                </div>
            </div>
            <Button size="lg" variant="neutral-base" className="shrink-0">
                دریافت شد
            </Button>
        </div>
    );
}

export default Notification;
