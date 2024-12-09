import { Suspense } from "react";

import QuestionsGrid, { QuestionsGridLoading } from "@/components/layout/panel/questions/QuestionsGrid";

import QuestionCircle from "@/components/svgs/QuestionCircle";

function Questions() {
    return (
        <div className="space-y-8 py-8 px-4 sm:p-8">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <QuestionCircle className="w-8" />
                    سوالات و پرسش‌ها
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">سوالات و پرسش‌های شما از جلسات مختلف دوره‌ها</p>
            </div>
            <Suspense fallback={<QuestionsGridLoading />}>
                <QuestionsGrid />
            </Suspense>
        </div>
    );
}

export default Questions;
