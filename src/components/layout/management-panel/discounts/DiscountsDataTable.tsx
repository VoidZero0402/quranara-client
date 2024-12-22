"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import DiscountRow from "@/components/specific/management-panel/datatable-rows/DiscountRow";

const RemoveDiscountModal = dynamic(() => import("@/components/modal/management-panel/discounts/RemoveDiscountModal"), { ssr: false });
const UpdateDiscountModal = dynamic(() => import("@/components/modal/management-panel/discounts/UpdateDiscountModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "code",
        text: "شناسه تخفیف",
    },
    {
        key: "percent",
        text: "میزان تخفیف",
    },
    {
        key: "max",
        text: "حداکثر استفاده",
    },
    {
        key: "uses",
        text: "میزان استفاده",
    },
    {
        key: "createdAt",
        text: "تاریخ ایجاد",
    },
    {
        key: "expireAt",
        text: "تاریخ انتضا",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];

import { Discount } from "@/types/discount.types";
import { Pagination } from "@/types/response.types";

type DiscountsDataTableProps = {
    discounts: Discount[];
    pagination: Pagination;
};

function DiscountsDataTable({ discounts, pagination }: DiscountsDataTableProps) {
    const { isOpen: isOpenRemoveModal, open: openRemoveModal, close: closeRemoveModal, props: removeModalProps } = useToggleState<{ discount: Pick<Discount, "_id" | "code"> }>();
    const { isOpen: isOpenUpdateModal, open: openUpdateModal, close: closeUpdateModal, props: updateModalProps } = useToggleState<{ discount: Discount }>();

    const onRemove = useCallback((discount: Pick<Discount, "_id" | "code">) => {
        openRemoveModal({ discount });
    }, []);

    const onUpdate = useCallback((discount: Discount) => {
        openUpdateModal({ discount });
    }, []);

    return (
        <section>
            <DataTable entity={ENTITIES.DISCOUNTS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {discounts.map((discount) => (
                        <DiscountRow key={discount._id} discount={discount} onRemove={onRemove} onUpdate={onUpdate} />
                    ))}
                </DataTableBody>
            </DataTable>
            <RemoveDiscountModal isOpen={isOpenRemoveModal} onClose={closeRemoveModal} {...removeModalProps} />
            <UpdateDiscountModal isOpen={isOpenUpdateModal} onClose={closeUpdateModal} {...updateModalProps} />
        </section>
    );
}

export default DiscountsDataTable;
