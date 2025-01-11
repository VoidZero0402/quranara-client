"use client";

import { SourceText } from "@/constants/comments";

import Modal, { ModalBody, ModalHeader, ModalInstanceProps } from "../../Modal";

import Preview from "@/components/specific/management-panel/comments/Preview";

import ChatRoundDots from "@/components/svgs/ChatRoundDots";

import { Comment, FieldSource, Source } from "@/types/comment.types";
import AnswerCommentForm from "@/components/form/template/management-panel/AnswerCommentForm";

type PreviewNewsModalPropsProps = ModalInstanceProps & { comment: Comment; source: Source; field: FieldSource };

function PreviewAndAnswerCommentModal({ isOpen, onClose, comment, source, field }: PreviewNewsModalPropsProps) {
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
                <AnswerCommentForm comment={{ _id: comment?._id, course: comment?.course, blog: comment?.blog, tv: comment?.tv }} onClose={onClose} />
            </ModalBody>
        </Modal>
    );
}

export default PreviewAndAnswerCommentModal;
