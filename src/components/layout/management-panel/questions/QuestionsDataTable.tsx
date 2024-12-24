"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useMutation } from "@tanstack/react-query";

import { closeQuestion } from "@/api/mutations/questions";
import { CloseQuestionStatusOptions } from "@/api/errors/questions";

import { statusHandler } from "@/libs/responses";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import QuestionRow from "@/components/specific/management-panel/datatable-rows/QuestionRow";

const ChatOffCanvas = dynamic(() => import("@/components/specific/management-panel/questions/ChatOffCanvas"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "title",
        text: "عنوان",
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
        key: "updatedAt",
        text: "آخرین بروزرسانی",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];

import { Question } from "@/types/question.types";
import { Pagination } from "@/types/response.types";

type QuestionsDataTableProps = {
    questions: Question[];
    pagination: Pagination;
};

function QuestionsDataTable({ questions, pagination }: QuestionsDataTableProps) {
    const router = useRouter();

    const { isOpen: isOpenChatOffCanvas, open: openChatOffCanvas, close: closeChatOffCanvas, props: chatOffCanvasProps } = useToggleState<{ question: Question }>();

    const onChat = useCallback((question: Question) => {
        openChatOffCanvas({ question });
    }, []);

    const { mutate: close } = useMutation({
        mutationFn: (_id: string) => closeQuestion({ questionId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, CloseQuestionStatusOptions);

                if (data.success) {
                    router.refresh();
                }
            }
        },
    });

    return (
        <section>
            <DataTable entity={ENTITIES.QUESTIONS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {questions.map((question) => (
                        <QuestionRow key={question._id} question={question} onChat={onChat} onClose={close} />
                    ))}
                </DataTableBody>
            </DataTable>
            <ChatOffCanvas isOpen={isOpenChatOffCanvas} onClose={closeChatOffCanvas} {...chatOffCanvasProps} />
        </section>
    );
}

export default QuestionsDataTable;
