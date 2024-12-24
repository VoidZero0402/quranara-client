import { ROLES } from "@/constants/comments";

import Message from "@/components/ui/Message";

import { QuestionMessage } from "@/types/question.types";

type MessagesProps = { messages: QuestionMessage[] };

function Messages({ messages }: MessagesProps) {
    return (
        <div className="flex flex-col gap-4">
            {messages?.map((message) => (
                <Message key={message.createdAt} {...message} isAnswer={message.user.role === ROLES.USER} />
            ))}
        </div>
    );
}

export default Messages;
