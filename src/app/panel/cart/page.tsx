import { Suspense } from "react";

import Provider, { ProviderLoading } from "@/components/layout/panel/cart/Provider";

function Cart() {
    return (
        <div className="space-y-8 py-8 px-4 sm:p-8">
            <Suspense fallback={<ProviderLoading />}>
                <Provider />
            </Suspense>
        </div>
    );
}

export default Cart;
