import { Suspense } from "react";
import Link from "next/link";

import QuestionsDisplay from "@/components/specific/panel/index/QuestionsDisplay";

import Button from "@/components/ui/Button";

import QuestionCircle from "@/components/svgs/QuestionCircle";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";

function Questions() {
    return (
        <div className="space-y-8 min-[1480px]:w-1/2 py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center sm:items-start gap-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                        <QuestionCircle className="w-8" />
                        پرسش‌های من
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">آخرین پرسش‌هایی که ایجاد کردی</p>
                </div>
                <Link href="/panel/questions">
                    <Button size="lg" variant="text-primary">
                        مشاهده همه پرسش‌های من
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            <Suspense>
                <QuestionsDisplay />
            </Suspense>
        </div>
    );
}

export default Questions;
