"use client";

import { formatDate } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import Eye from "@/components/svgs/Eye";

import { Order } from "@/types/order.types";
import Avatar from "@/components/ui/Avatar";

type OrderRowProps = { order: Order; onDetails: (order: Order) => void };

function OrderRow({ order, onDetails }: OrderRowProps) {
    return (
        <tr>
            <td>
                <div className="flex gap-x-2">
                    <div className="relative">
                        <Avatar src={order.user.profile ?? undefined} className="size-14 rounded-full" />
                        <div className="absolute left-1 bottom-1 size-2 bg-teal-500 rounded-full">
                            <div className="size-full bg-teal-500 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span className="font-pelak-medium text-gray-800 dark:text-gray-200">{order.user.username}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{order.user.phone}</span>
                    </div>
                </div>
            </td>
            <td>
                <span className="underline">سفارش {order.shortId}</span>
            </td>
            <td>
                <span className="underline text-amber-400">{order.amount.toLocaleString("fa")} تومان</span>
            </td>
            <td>{formatDate(new Date(order.updatedAt ?? Date.now()))}</td>
            <td>
                <BadgeLight>{order.items.length} دوره</BadgeLight>
            </td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="مشاهده جزئیات" variant="teal" onClick={() => onDetails(order)}>
                        <Eye />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default OrderRow;
