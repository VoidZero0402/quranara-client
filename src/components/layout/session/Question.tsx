import Avatar from "@/components/ui/Avatar";
import Slice from "@/components/ui/Slice";

import QuestionCircle from "@/components/svgs/QuestionCircle";
import QuestionForm from "@/components/form/template/Question";
import QuestionChat from "@/components/specific/session/QuestionChat";

function Question() {
    return (
        <section className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-2 font-pelak-medium text-xl">
                    <QuestionCircle className="w-8" />
                    پرسش و پاسخ
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">اگر سوال یا مشکلی در هر جلسه داشتین، می‌توانید در این بخش با مدرس در ارتباط باشید</p>
            </div>
            <Slice className="dark:bg-gray-800" />
            <div className="flex items-center gap-x-2">
                <Avatar />
                <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                    <span className="block">محمدحسن خانی</span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">پرسش جدید</span>
                </div>
            </div>
            <QuestionForm />
            <QuestionChat />
        </section>
    );
}

export default Question;
