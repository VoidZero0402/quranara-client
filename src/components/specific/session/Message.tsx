import Attached from "@/components/ui/Attached";
import Avatar from "@/components/ui/Avatar";
import Slice from "@/components/ui/Slice";
import { formateDateObject } from "@/libs/funcs";

import { QuestionMessage } from "@/types/question.types";

function Message({ content, user, createdAt, attached }: QuestionMessage) {
    return (
        <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center gap-x-2">
                <Avatar src={user.profile} />
                <div className="space-y-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                    <span className="block">{user.username}</span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">{formateDateObject(createdAt)}</span>
                </div>
            </div>
            <Slice />
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-8">{content}</p>
            {attached && <Attached {...attached} />}
        </div>
    );
}

export default Message;
