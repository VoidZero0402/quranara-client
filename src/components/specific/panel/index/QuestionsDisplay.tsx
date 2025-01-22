import { cookies } from "next/headers";
import Link from "next/link";

import { getQuestions } from "@/api/queries/questions";

import Question from "./Question";

import Button from "@/components/ui/Button";

import LinkCircle from "@/components/svgs/LinkCircle";

async function QuestionsDisplay() {
    const { data } = await getQuestions({ page: 1, limit: 4 }, (await cookies()).toString());

    return (
        <>
            {!!data.questions.length ? (
                <div className="space-y-4">
                    {data.questions.map((question) => (
                        <Question key={question._id} {...question} />
                    ))}
                </div>
            ) : (
                <EmptyState />
            )}
        </>
    );
}

function EmptyState() {
    return (
        <div className="flex-center flex-col gap-4">
            <div className="space-y-2 text-center">
                <span className="font-pelak-medium text-xl text-gray-800 dark:text-gray-200 leading-8">هنوز هیچ پرسشی رو ایجاد نکردی</span>
                <p className="text-gray-600 dark:text-gray-400 leading-7">در صورتی که راجب هر جلسه از دوره حتی جلسات رایگان سوالی داشتی میتونی مطرح کنی!</p>
            </div>
            <Link href="/panel/courses">
                <Button size="lg">
                    <LinkCircle />
                    مشاهده دوره‌های من
                </Button>
            </Link>
        </div>
    );
}

export default QuestionsDisplay;
