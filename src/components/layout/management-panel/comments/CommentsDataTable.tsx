"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useMutation } from "@tanstack/react-query";

import { acceptComment, pinComment, rejectComment, unpinComment } from "@/api/mutations/comments";
import { AcceptCommentStatusOptions, PinCommentStatusOptions, RejectCommentStatusOptions, UnpinCommentStatusOptions } from "@/api/errors/comments";

import { statusHandler } from "@/libs/responses";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";
import { SourceText } from "@/constants/comments";

import CommentRow from "@/components/specific/management-panel/datatable-rows/CommentRow";

const PreviewAndAnswerCommentModal = dynamic(() => import("@/components/modal/management-panel/comments/PreviewAndAnswerCommentModal"), { ssr: false });
const RepliesOffCanvas = dynamic(() => import("@/components/specific/management-panel/comments/RepliesOffCanvas"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

import { Comment, CommentIdentifiers, FieldSource, Source } from "@/types/comment.types";
import { Pagination } from "@/types/response.types";

type CommentsDataTableProps = {
    comments: Comment[];
    pagination: Pagination;
    source: Source;
};

function CommentsDataTable({ comments, pagination, source }: CommentsDataTableProps) {
    const router = useRouter();

    const { isOpen: isOpenPreviewAndAnswerModal, open: openPreviewAndAnswerModal, close: closePreviewAndAnswerModal, props: previewAndAnswerModalProps } = useToggleState<{ comment: Comment; source: Source; field: FieldSource }>();
    const { isOpen: isOpenRepliesOffCanvas, open: openRepliesOffCanvas, close: closeRepliesOffCanvas, props: repliesOffCanvasProps } = useToggleState<{ comment: Comment }>();

    const field = source.toLowerCase() as FieldSource;

    const onPreviewAnswer = useCallback(
        (comment: Comment) => {
            openPreviewAndAnswerModal({ comment, source, field });
        },
        [source]
    );

    const onManageReplies = useCallback((comment: Comment) => {
        openRepliesOffCanvas({ comment });
    }, []);

    const { mutate: accept } = useMutation({
        mutationFn: (comment: CommentIdentifiers) => acceptComment({ commentId: comment._id }, { isReply: "0" }),
        onSettled(data) {
            if (data) {
                statusHandler(data, AcceptCommentStatusOptions);

                if (data.success) {
                    router.refresh();
                }
            }
        },
    });

    const { mutate: reject } = useMutation({
        mutationFn: (comment: CommentIdentifiers) => rejectComment({ commentId: comment._id }, { isReply: "0" }),
        onSettled(data) {
            if (data) {
                statusHandler(data, RejectCommentStatusOptions);

                if (data.success) {
                    router.refresh();
                }
            }
        },
    });

    const { mutate: pin } = useMutation({
        mutationFn: (comment: CommentIdentifiers) => pinComment({ commentId: comment._id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, PinCommentStatusOptions);

                if (data.success) {
                    router.refresh();
                }
            }
        },
    });

    const { mutate: unpin } = useMutation({
        mutationFn: (comment: CommentIdentifiers) => unpinComment({ commentId: comment._id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, UnpinCommentStatusOptions);

                if (data.success) {
                    router.refresh();
                }
            }
        },
    });

    const columns: Column[] = useMemo(
        () => [
            {
                key: "title",
                text: SourceText[source],
            },
            {
                key: "user",
                text: "کاربر",
            },
            {
                key: "status",
                text: "وضعیت",
            },
            {
                key: "pin",
                text: "وضعیت پین",
            },
            {
                key: "createdAt",
                text: "زمان ایجاد",
            },
            {
                key: "actions",
                text: "گزینه‌های پیشرفته",
            },
        ],
        [source]
    );

    return (
        <section>
            <DataTable entity={ENTITIES.COMMENTS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {comments.map((comment) => (
                        <CommentRow key={comment._id} comment={comment} field={field} onPreviewAnswer={onPreviewAnswer} onManageReplies={onManageReplies} onAccept={accept} onReject={reject} onPin={pin} onUnpin={unpin} />
                    ))}
                </DataTableBody>
            </DataTable>
            <PreviewAndAnswerCommentModal isOpen={isOpenPreviewAndAnswerModal} onClose={closePreviewAndAnswerModal} {...previewAndAnswerModalProps} />
            <RepliesOffCanvas isOpen={isOpenRepliesOffCanvas} onClose={closeRepliesOffCanvas} {...repliesOffCanvasProps} />
        </section>
    );
}

export default CommentsDataTable;
