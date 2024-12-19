"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import NewsRow from "@/components/specific/management-panel/datatable-rows/NewsRow";

// const UserDetailsModal = dynamic(() => import("@/components/modal/management-panel/users/UserDetailsModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "cover",
        text: "کاور خبر",
    },
    {
        key: "title",
        text: "عنوان",
    },
    {
        key: "shown",
        text: "وضعیت نمایش",
    },
    {
        key: "createdAt",
        text: "تاریخ ایجاد",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];

import { News } from "@/types/news.types";
import { Pagination } from "@/types/response.types";

type NewsDataTableProps = {
    newses: News[];
    pagination: Pagination;
};

function NewsDataTable({ newses, pagination }: NewsDataTableProps) {
    return (
        <section>
            <DataTable entity={ENTITIES.NEWS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {newses.map((news) => (
                        <NewsRow key={news._id} news={news} />
                    ))}
                </DataTableBody>
            </DataTable>
        </section>
    );
}

export default NewsDataTable;
