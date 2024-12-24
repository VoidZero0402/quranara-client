import { formateDateObject } from "@/libs/funcs";

import Attached from "@/components/ui/Attached";

import QuestionCircle from "@/components/svgs/QuestionCircle";

import { QuestionMessage } from "@/types/question.types";

function UserQuestion({ content, user, createdAt, attached }: QuestionMessage) {
    return (
        <div className="space-y-2 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center justify-between font-pelak-medium">
                <div className="flex items-center gap-x-2">
                    <QuestionCircle className="w-6 shrink-0" />
                    پرسش کاربر
                </div>
                <span className="underline text-amber-400">{user.username}</span>
            </div>
            <p className="text-gray-800 dark:text-gray-200 leading-8">{content}</p>
            <div className="flex items-center justify-between">
                <div>{attached && <Attached {...attached} />}</div>
                <span className="text-gray-800 dark:text-gray-200">{formateDateObject(createdAt)}</span>
            </div>
        </div>
    );
}

export default UserQuestion;
