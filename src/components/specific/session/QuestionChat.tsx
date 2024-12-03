import Avatar from "@/components/ui/Avatar";
import Slice from "@/components/ui/Slice";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import QuestionCircle from "@/components/svgs/QuestionCircle";

function QuestionChat() {
    return (
        <div className="space-y-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="space-y-2 p-4 bg-white dark:bg-gray-850 rounded-xl">
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-x-2 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                        <QuestionCircle />
                        سوال شما
                    </span>
                    <span className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">{new Date().toLocaleString("fa", { dateStyle: "medium", timeStyle: "short" })}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-8">ماژولار تر، و قابل استفاده مجدد تقسیم کنند. این قابلیت نه‌ تنها باعث کاهش حجم کد می‌شود، بلکه مدیریت و نگهداری پروژه‌ها را نیز ساده‌ تر می‌کند.</p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-x-2 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                        <ChatRoundLine />
                        پاسخ و تبادل نظر
                    </span>
                    <span className="py-2.5 px-4 font-pelak-medium text-sm amber-light rounded-lg">در انتظار پاسخ</span>
                </div>
                <Slice className="dark:opacity-50" />
                <div className="space-y-4 p-6 bg-white dark:bg-gray-850 rounded-xl">
                    <Message />
                    <Message />
                    <Message />
                </div>
            </div>
        </div>
    );
}

function EmptyState() {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-lg text-gray-600 dark:text-gray-400">پاسخی برای سوال ثبت نشده است</span>
        </div>
    );
}

function Message() {
    return (
        <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center gap-x-2">
                <Avatar />
                <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                    <span className="block">محمدحسن خانی</span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">{new Date().toLocaleString("fa", { dateStyle: "medium", timeStyle: "short" })}</span>
                </div>
            </div>
            <Slice />
            <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-8">یکی از ویژگی‌های برجسته React، ساختار کامپوننت‌ محور آن است. این ساختار به توسعه‌دهندگان اجازه می‌دهد که کدهای خود را به قطعات کوچکتر، ماژولار تر، و قابل استفاده مجدد تقسیم کنند.</p>
        </div>
    );
}

export default QuestionChat;
