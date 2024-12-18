"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import CategoryRow from "@/components/specific/management-panel/datatable-rows/CategoryRow";

const EditCategoryModal = dynamic(() => import("@/components/modal/management-panel/categories/EditCategoryModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "profile",
        text: "عنوان",
    },
    {
        key: "phone",
        text: "توضیحات",
    },
    {
        key: "fullname",
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
    const { isOpen: isOpenEditModal, open: openEditModal, close: closeEditModal, props: editModalProps } = useToggleState<{ category: Category }>();

    const onEdit = useCallback((category: Category) => {
        openEditModal({ category });
    }, []);

    return (
        <section>
            <DataTable entity={ENTITIES.CATEGORIES} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {categories.map((category) => (
                        <CategoryRow key={category._id} category={category} onEdit={onEdit} />
                    ))}
                </DataTableBody>
            </DataTable>
            <EditCategoryModal isOpen={isOpenEditModal} onClose={closeEditModal} {...editModalProps} />
        </section>
    );
}

export default CategoriesDataTable;
