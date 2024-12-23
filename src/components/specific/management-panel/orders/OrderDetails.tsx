import { formateDateObject } from "@/libs/funcs";

type OrderDetailsProps = { price: number; payAt: number };

function OrderDetails({ price, payAt }: OrderDetailsProps) {
    return (
        <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 font-pelak-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <span>مجموع مبلغ</span>
                <span>{price?.toLocaleString("fa")} تومان</span>
            </div>
            <div className="flex items-center justify-between p-4 font-pelak-medium text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <span>زمان سفارش</span>
                <span className="underline">{formateDateObject(payAt)}</span>
            </div>
        </div>
    );
}

export default OrderDetails;
