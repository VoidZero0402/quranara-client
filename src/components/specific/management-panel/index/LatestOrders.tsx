import Link from "next/link";

import Order from "./Order";

import Bag from "@/components/svgs/Bag";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";

import { Order as OrderType } from "@/types/order.types";

type LatestOrdersProps = {
    orders: OrderType[];
};

function LatestOrders({ orders }: LatestOrdersProps) {
    return (
        <div className="space-y-8 w-full xl:w-1/2 py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="flex items-center justify-center sm:justify-between gap-4">
                <span className="flex items-center gap-x-1 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                    <Bag className="w-7" />
                    آخرین سفارشات
                </span>
                <Link href="/management-panel/users" className="hidden sm:flex items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-amber-400 transition-colors">
                    مشاهده همه سفارشات
                    <LongArrowLeft />
                </Link>
            </div>
            <div className="space-y-4">
                {orders.map((order) => (
                    <Order key={order._id} {...order} />
                ))}
            </div>
            <Link href="/management-panel/users" className="flex sm:hidden justify-center items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-amber-400 transition-colors">
                مشاهده همه سفارشات
                <LongArrowLeft />
            </Link>
        </div>
    );
}

export default LatestOrders;
