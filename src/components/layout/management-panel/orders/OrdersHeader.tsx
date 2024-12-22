import Bag from "@/components/svgs/Bag";
import React from "react";

function OrdersHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Bag className="w-8" />
                    سفارشات کاربران
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">سفارشاتی که کاربران قرآن‌آرا ثبت کردن رو مدیریت کن!</p>
            </div>
        </div>
    );
}

export default OrdersHeader;
