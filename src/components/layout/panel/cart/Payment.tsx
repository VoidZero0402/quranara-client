"use client";

import { useState } from "react";

import PaymentButton from "@/components/specific/panel/cart/PaymentButton";

import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";
import Slice from "@/components/ui/Slice";

import Card from "@/components/svgs/Card";

import { Cart } from "@/types/cart.types";
import { Discount } from "@/types/discount.types";
import ApplyDiscountForm from "@/components/form/template/panel/ApplyDiscountForm";

type PaymentProps = Omit<Cart, "_id" | "items">;

function Payment({ totalPrice, discount, payableAmount }: PaymentProps) {
    const [discountCode, setDiscountCode] = useState<Discount | undefined>(undefined);

    return (
        <div className="space-y-8 min-[1480px]:w-1/3 h-max">
            <aside className="space-y-8 p-4 sm:p-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <div className="space-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-600 dark:text-gray-300">
                        <Card className="w-8" />
                        جزئیات پرداخت
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">با شرایط و قوانین موافقت کن تا به درگاه پرداخت بری</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between font-pelak-medium text-gray-600 dark:text-gray-300">
                        <span className="text-sm xs:text-base">مبلغ قابل پرداخت</span>
                        <div className="flex items-center gap-x-1">
                            <span className="font-pelak-semibold text-2xl">{totalPrice.toLocaleString()}</span>
                            <span className="text-xs text-gray-600 dark:text-gray-400">تومان</span>
                        </div>
                    </div>
                    {!!discount.percent && (
                        <div className="flex items-center justify-between font-pelak-medium text-teal-500">
                            <span className="text-sm xs:text-base">میزان تخفیف</span>
                            <div className="flex items-center gap-x-1">
                                <span className="text-xs">( {discount.percent}% )</span>
                                <span className="font-pelak-semibold text-2xl">{discount.price.toLocaleString()}</span>
                                <span className="text-xs">تومان</span>
                            </div>
                        </div>
                    )}
                    {discountCode && (
                        <div className="flex items-center justify-between font-pelak-medium text-amber-400">
                            <span className="text-sm xs:text-base">کد تخفیف</span>
                            <div className="flex items-center gap-x-1">
                                <span className="text-xs">( {discountCode.percent}% )</span>
                                <span className="font-pelak-semibold text-2xl">{Math.floor((payableAmount * discountCode.percent) / 100).toLocaleString()}</span>
                                <span className="text-xs">تومان</span>
                            </div>
                        </div>
                    )}
                </div>
                <Slice className="dark:opacity-50" />
                <div className="flex items-center justify-between font-pelak-medium text-gray-600 dark:text-gray-300">
                    <span className="text-sm xs:text-base">مجموع مبلغ</span>
                    <div className="flex items-center gap-x-1">
                        <span className="font-pelak-semibold text-3xl">{(discountCode ? payableAmount - Math.floor((payableAmount * discountCode.percent) / 100) : payableAmount).toLocaleString()}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">تومان</span>
                    </div>
                </div>
                <PaymentButton discount={discountCode} />
            </aside>
            <ApplyDiscountForm onChange={setDiscountCode} />
        </div>
    );
}

export function PaymentLoading() {
    return (
        <aside className="space-y-8 min-[1480px]:w-1/3 h-max p-4 sm:p-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-600 dark:text-gray-300">
                    <Card className="w-8" />
                    جزئیات پرداخت
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">با شرایط و قوانین موافقت کن تا به درگاه پرداخت بری</p>
            </div>
            <Skeleton className="space-y-4">
                <div className="flex items-center justify-between">
                    <SkeletonFrame className="h-6 w-1/3 dark:bg-gray-850"></SkeletonFrame>
                    <SkeletonFrame className="h-8 w-1/3 dark:bg-gray-850"></SkeletonFrame>
                </div>
                <div className="flex items-center justify-between">
                    <SkeletonFrame className="h-6 w-1/3 dark:bg-gray-850"></SkeletonFrame>
                    <SkeletonFrame className="h-8 w-1/3 dark:bg-gray-850"></SkeletonFrame>
                </div>
            </Skeleton>
            <Slice className="dark:opacity-50" />
            <Skeleton>
                <div className="flex items-center justify-between">
                    <SkeletonFrame className="h-6 w-1/3 dark:bg-gray-850"></SkeletonFrame>
                    <SkeletonFrame className="h-8 w-1/3 dark:bg-gray-850"></SkeletonFrame>
                </div>
            </Skeleton>
            <Skeleton className="space-y-4">
                <SkeletonFrame className="h-5 w-2/3 dark:bg-gray-850"></SkeletonFrame>
                <SkeletonFrame className="h-14 w-full dark:bg-gray-850 rounded-2xl"></SkeletonFrame>
            </Skeleton>
        </aside>
    );
}

export default Payment;
