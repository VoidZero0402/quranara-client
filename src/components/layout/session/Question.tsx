import { cookies } from "next/headers";

import QuestionChat from "@/components/specific/session/QuestionChat";

import QuestionForm from "@/components/form/template/QuestionForm";

import Avatar from "@/components/ui/Avatar";
import Slice from "@/components/ui/Slice";

import QuestionCircle from "@/components/svgs/QuestionCircle";
import { getSessionQuestion } from "@/api/queries/sessions";

import { getCurrentUser } from "@/libs/server/funcs";

type QuestionProps = { _id: string; slug: string };

async function Question({ _id, slug }: QuestionProps) {
    const user = await getCurrentUser();

    if (!user) {
        return (
            <section className="space-y-4 p-6 bg-white dark:bg-gray-850 rounded-2xl" id="question">
                <div className="space-y-2">
                    <span className="flex items-center gap-x-2 font-pelak-medium text-xl">
                        <QuestionCircle className="w-8" />
                        پرسش و پاسخ
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-8">اگر سوال یا مشکلی در هر جلسه داشتین، می‌توانید در این بخش با مدرس در ارتباط باشید</p>
                </div>
                <div className="flex-center col-span-4">
                    <span className="font-pelak-medium text-sm text-red-500 leading-8">برای دسترسی به این بخش ابتدا به حساب کاربری خود وارد شوید</span>
                </div>
            </section>
        );
    }

    const { data } = await getSessionQuestion({ slug }, (await cookies()).toString());

    return (
        <section className="space-y-8 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl" id="question">
            <div className="space-y-2">
                <span className="flex items-center gap-x-2 font-pelak-medium text-xl">
                    <QuestionCircle className="w-8" />
                    پرسش و پاسخ
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-6">اگر سوال یا مشکلی در هر جلسه داشتین، می‌توانید در این بخش با مدرس در ارتباط باشید</p>
            </div>
            <Slice className="dark:bg-gray-800" />
            <div className="flex items-center gap-x-2">
                <Avatar src={user.profile} />
                <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                    <span className="block">{user.username}</span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">پرسش جدید</span>
                </div>
            </div>
            <QuestionForm sessionId={_id} questionId={data.question?._id} />
            <QuestionChat messages={data.question?.messages} status={data.question?.status} />
        </section>
    );
}

export default Question;
