"use client";

import { SourceText } from "@/constants/comments";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import Preview from "@/components/specific/management-panel/comments/Preview";

import ChatRoundDots from "@/components/svgs/ChatRoundDots";

import { Comment, FieldSource, Source } from "@/types/comment.types";
import AnswerCommentForm from "@/components/form/template/management-panel/AnswerCommentForm";

type PreviewNewsModalPropsProps = ModalInstanceProps & { comment: Comment; source: Source };

function PreviewAndAnswerCommentModal({ isOpen, onClose, comment, source }: PreviewNewsModalPropsProps) {
    const field = source?.toLowerCase() as FieldSource;

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[768px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <ChatRoundDots />
                    مشاهده و پاسخ به دیدگاه
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8 min-h-72" scrollable>
                <Preview message={comment?.content} source={{ text: SourceText[source], title: comment ? (comment[field]?.title as string) : "" }} />
                <AnswerCommentForm _id={comment?._id} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default PreviewAndAnswerCommentModal;
