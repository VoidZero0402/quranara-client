"use client";

import { useCallback, useMemo } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";
import { SourceText } from "@/constants/comments";

import CategoryRow from "@/components/specific/management-panel/datatable-rows/CategoryRow";

// const UpdateCategoryModal = dynamic(() => import("@/components/modal/management-panel/categories/UpdateCategoryModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

import { Comment, FieldSource, Source } from "@/types/comment.types";
import { Pagination } from "@/types/response.types";
import CommentRow from "@/components/specific/management-panel/datatable-rows/CommentRow";

type CommentsDataTableProps = {
    comments: Comment[];
    pagination: Pagination;
    source: Source;
};

function CommentsDataTable({ comments, pagination, source }: CommentsDataTableProps) {
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
                text: "تاریخ ایجاد",
            },
            {
                key: "actions",
                text: "گزینه‌های پیشرفته",
            },
        ],
        [source]
    );

    const field = source.toLowerCase() as FieldSource;

    return (
        <DataTable entity={ENTITIES.COMMENTS} columns={columns} pagination={pagination}>
            <DataTableBody>
                {comments.map((comment) => (
                    <CommentRow key={comment._id} comment={comment} field={field} />
                ))}
            </DataTableBody>
        </DataTable>
    );
}

export default CommentsDataTable;
