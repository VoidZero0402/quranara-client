import { cookies } from "next/headers";

import { getCart } from "@/api/queries/cart";

import Basket, { BasketLoading } from "./Basket";
import Payment, { PaymentLoading } from "./Payment";

async function Provider() {
    const { data } = await getCart((await cookies()).toString());

    return (
        <div className="flex flex-col min-[1480px]:flex-row gap-8">
            {!!data.cart.items.length ? (
                <>
                    <Basket items={data.cart.items} />
                    <Payment totalPrice={data.cart.totalPrice} discount={data.cart.discount} payableAmount={data.cart.payableAmount} />
                </>
            ) : (
                <EmptyState />
            )}
        </div>
    );
}

function EmptyState() {
    return (
        <div className="flex-center w-full py-10">
            <span className="font-pelak-medium text-lg text-gray-600 dark:text-gray-400">متاسفانه هنوز دوره‌ای رو به سبد خریدت اضافه نکردی</span>
        </div>
    );
}

export function ProviderLoading() {
    return (
        <div className="flex flex-col min-[1480px]:flex-row gap-8">
            <BasketLoading />
            <PaymentLoading />
        </div>
    );
}

export default Provider;
