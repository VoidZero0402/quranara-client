import Link from "next/link";

import RemoveFromBasketButton from "@/components/specific/panel/cart/RemoveFromBasketButton";

import Image from "@/components/ui/Image";
import Skeleton, { SkeletonFrame } from "@/components/ui/Skeleton";

import { type CartItem } from "@/types/cart.types";

function CartItem({ _id, title, description, slug, price, cover, discount }: CartItem) {
    return (
        <div className="flex flex-col md:flex-row md:items-center gap-4 relative">
            <Link href={`/courses/${slug}`} className="md:w-1/4 shrink-0 overflow-hidden">
                <div className="aspect-video">
                    <Image src={cover} alt={title} width={640} height={360} wrapperClassName="rounded-xl" />
                </div>
            </Link>
            <div className="md:w-1/2 space-y-2">
                <h3 className="font-pelak-medium text-lg text-gray-800 dark:text-gray-200 line-clamp-1">
                    <Link href={`/courses/${slug}`}>{title}</Link>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-6 line-clamp-2">{description}</p>
            </div>
            <div className="flex items-center justify-between md:w-1/4 shrink-0">
                <div>
                    {!!discount && <span className="text-xs text-teal-500">( {discount}% تخفیف )</span>}
                    <div className="flex items-center gap-x-1">
                        <span className="font-pelak-semibold text-2xl text-gray-600 dark:text-gray-300">{price.toLocaleString()}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">تومان</span>
                    </div>
                </div>
                <RemoveFromBasketButton _id={_id} />
            </div>
        </div>
    );
}

export function CartItemLoading() {
    return (
        <Skeleton>
            <div className="flex flex-col md:flex-row md:items-center gap-4 relative">
                <div className="md:w-1/4 aspect-video">
                    <SkeletonFrame className="rounded-xl dark:bg-gray-850"></SkeletonFrame>
                </div>
                <div className="md:w-1/2 space-y-2">
                    <SkeletonFrame className="h-7 w-3/4 dark:bg-gray-850"></SkeletonFrame>
                    <div className="space-y-1.5">
                        <SkeletonFrame className="h-5 dark:bg-gray-850"></SkeletonFrame>
                        <SkeletonFrame className="h-5 w-3/4 dark:bg-gray-850"></SkeletonFrame>
                    </div>
                </div>
                <div className="flex items-center justify-between md:w-1/4">
                    <SkeletonFrame className="w-1/2 h-7 dark:bg-gray-850"></SkeletonFrame>
                </div>
            </div>
        </Skeleton>
    );
}

export default CartItem;
