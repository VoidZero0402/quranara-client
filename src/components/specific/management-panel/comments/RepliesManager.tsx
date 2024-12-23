import Reply from "./Reply";

import { Reply as ReplyType } from "@/types/comment.types";

type RepliesManagerProps = { replies: ReplyType[]; accept: (_id: string) => void; reject: (_id: string) => void };

function RepliesManager({ replies, accept, reject }: RepliesManagerProps) {
    return (
        <div className="space-y-4">
            {replies?.map((reply) => (
                <Reply key={reply._id} {...reply} onAccept={accept} onReject={reject} />
            ))}
        </div>
    );
}

export default RepliesManager;
