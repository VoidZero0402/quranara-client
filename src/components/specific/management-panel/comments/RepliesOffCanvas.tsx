"use cleint";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { acceptComment, checkReplies, rejectComment } from "@/api/mutations/comments";
import { AcceptCommentStatusOptions, RejectCommentStatusOptions } from "@/api/errors/comments";

import { statusHandler } from "@/libs/responses";

import { STATUS } from "@/constants/comments";

import useEffectState from "@/hooks/useEffectState";

import RepliesManager from "./RepliesManager";

import OffCanvas, { OffCanvasHeader, OffCanvasInstanceProps } from "@/components/ui/OffCanvas";

import Reply from "@/components/svgs/Reply";

import { Comment } from "@/types/comment.types";

type RepliesOffCanvasProps = OffCanvasInstanceProps & { comment: Comment };

function RepliesOffCanvas({ isOpen, onClose, comment }: RepliesOffCanvasProps) {
    const router = useRouter();

    const [replies, setReplies] = useEffectState(comment?._replies);

    const {
        mutate: accept,
        isPending: isPendingAnswer,
        submittedAt: submittedAtAnswer,
    } = useMutation({
        mutationFn: (_id: string) => acceptComment({ commentId: _id }, { isReply: "1" }),
        onSettled(data, _, variables) {
            if (data) {
                statusHandler(data, AcceptCommentStatusOptions);

                if (data.success) {
                    setReplies((replies) => replies.map((reply) => (reply._id === variables ? { ...reply, status: STATUS.ACCEPTED } : reply)));
                }
            }
        },
    });

    const {
        mutate: reject,
        isPending: isPendingReject,
        submittedAt: submittedAtReject,
    } = useMutation({
        mutationFn: (_id: string) => rejectComment({ commentId: _id }, { isReply: "1" }),
        onSettled(data, _, variables) {
            if (data) {
                statusHandler(data, RejectCommentStatusOptions);

                if (data.success) {
                    setReplies((replies) => replies.map((reply) => (reply._id === variables ? { ...reply, status: STATUS.REJECTED } : reply)));
                }
            }
        },
    });

    const handleClose = async () => {
        if (!isPendingAnswer && !isPendingReject) {
            onClose();

            if (submittedAtAnswer || submittedAtReject) {
                await checkReplies({ commentId: comment._id });
            }

            router.refresh();

            // TODO: Revalidation
        }
    };

    return (
        <OffCanvas isOpen={isOpen} onClose={handleClose} scrollable>
            <OffCanvasHeader>
                <div className="flex items-center gap-x-2">
                    <Reply className="w-6 shrink-0" />
                    مدیریت پاسخ‌های دیدگاه
                </div>
            </OffCanvasHeader>
            <RepliesManager replies={replies} accept={accept} reject={reject} />
        </OffCanvas>
    );
}

export default RepliesOffCanvas;
