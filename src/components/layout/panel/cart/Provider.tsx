import { cookies } from "next/headers";
import Link from "next/link";

import { getCart } from "@/api/queries/cart";

import Basket, { BasketLoading } from "./Basket";
import Payment, { PaymentLoading } from "./Payment";

import Button from "@/components/ui/Button";

import LinkCircle from "@/components/svgs/LinkCircle";

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
        <div className="flex-center flex-col gap-4 py-10 w-full">
            <div className="space-y-2 text-center">
                <span className="font-pelak-medium text-xl text-gray-800 dark:text-gray-200 leading-8">هنوز دوره‌ای رو به سبد خریدت اضافه نکردی</span>
                <p className="text-gray-600 dark:text-gray-400 leading-8">اگه میخوای توی دوره‌ای شرکت کنی میتونی از طریق تیکت یا شبکه‌های اجتماعی با مدرس دوره مشورت کنی</p>
            </div>
            <div className="flex gap-x-2">
                <Link href="/panel/tickets/new">
                    <Button size="lg">
                        <LinkCircle />
                        مشورت از طریق تیکت
                    </Button>
                </Link>
            </div>
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
