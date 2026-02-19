"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import OrderRow from "@/components/specific/management-panel/datatable-rows/OrderRow";

const DetailsOrderModal = dynamic(() => import("@/components/modal/management-panel/orders/DetailsOrderModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "user",
        text: "کاربر",
    },
    {
        key: "identifier",
        text: "شناسه سفارش",
    },
    {
        key: "amount",
        text: "مبلغ نهایی",
    },
    {
        key: "payAt",
        text: "پرداخت شده در",
    },
    {
        key: "course-counts",
        text: "تعداد دوره",
    },
    {
        key: "status",
        text: "وضعیت",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];

import { Order } from "@/types/order.types";
import { Pagination } from "@/types/response.types";

type OrdersDataTableProps = {
    orders: Order[];
    pagination: Pagination;
};

function OrdersDataTable({ orders, pagination }: OrdersDataTableProps) {
    const { isOpen: isOpenDetailsModal, open: openDetailsModal, close: closeDetailsModal, props: detailsModalProps } = useToggleState<{ order: Order }>();

    const onDetails = useCallback((order: Order) => {
        openDetailsModal({ order });
    }, []);

    return (
        <section>
            <DataTable entity={ENTITIES.ORDERS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {orders.map((order) => (
                        <OrderRow key={order._id} order={order} onDetails={onDetails} />
                    ))}
                </DataTableBody>
            </DataTable>
            <DetailsOrderModal isOpen={isOpenDetailsModal} onClose={closeDetailsModal} {...detailsModalProps} />
        </section>
    );
}

export default OrdersDataTable;
