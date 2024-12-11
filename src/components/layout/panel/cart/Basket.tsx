import CartItem, { CartItemLoading } from "@/components/card/panel/CartItem";

import Bag from "@/components/svgs/Bag";

import { CartItem as CartItemType } from "@/types/cart.types";

type BasketProps = { items: CartItemType[] };

function Basket({ items }: BasketProps) {
    return (
        <section className="space-y-8 min-[1480px]:w-2/3 p-4 sm:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Bag className="w-8" />
                    سبد خرید دوره‌ها
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">دوره‌هایی که ذخیره کردی تا درشون ثبت‌نام کنی</p>
            </div>
            <div className="space-y-8">
                {items.map((course) => (
                    <CartItem key={course._id} {...course} />
                ))}
            </div>
        </section>
    );
}

export function BasketLoading() {
    return (
        <section className="space-y-8 min-[1480px]:w-2/3 p-4 sm:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Bag className="w-8" />
                    سبد خرید دوره‌ها
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">دوره‌هایی که ذخیره کردی تا درشون ثبت‌نام کنی</p>
            </div>
            <div className="space-y-8">
                <CartItemLoading />
                <CartItemLoading />
                <CartItemLoading />
            </div>
        </section>
    );
}

export default Basket;
