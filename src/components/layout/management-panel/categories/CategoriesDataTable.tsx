"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import CategoryRow from "@/components/specific/management-panel/datatable-rows/CategoryRow";

const UpdateCategoryModal = dynamic(() => import("@/components/modal/management-panel/categories/UpdateCategoryModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "title",
        text: "عنوان",
    },
    {
        key: "description",
        text: "توضیحات",
    },
    {
        key: "source",
        text: "منبع",
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

import { Category } from "@/types/category.types";
import { Pagination } from "@/types/response.types";

type CategoriesDataTableProps = {
    categories: Category[];
    pagination: Pagination;
};

function CategoriesDataTable({ categories, pagination }: CategoriesDataTableProps) {
    const { isOpen: isOpenUpdateModal, open: openUpdateModal, close: closeUpdateModal, props: updateModalProps } = useToggleState<{ category: Category }>();

    const onUpdate = useCallback((category: Category) => {
        openUpdateModal({ category });
    }, []);

    return (
        <section>
            <DataTable entity={ENTITIES.CATEGORIES} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {categories.map((category) => (
                        <CategoryRow key={category._id} category={category} onUpdate={onUpdate} />
                    ))}
                </DataTableBody>
            </DataTable>
            <UpdateCategoryModal isOpen={isOpenUpdateModal} onClose={closeUpdateModal} {...updateModalProps} />
        </section>
    );
}

export default CategoriesDataTable;
