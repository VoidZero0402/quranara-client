import Placeholder from "@/components/ui/Placeholder";

import Layers from "@/components/svgs/Layers";

import { OrderItem } from "@/types/order.types";

type OrderItemsProps = { items: OrderItem[] };

function OrderItems({ items }: OrderItemsProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-x-1 font-pelak-medium">
                <Layers />
                دوره‌های خریداری شده
            </div>
            <div className="space-y-4">
                {items?.map((item) => (
                    <Order key={item._id} {...item} />
                ))}
            </div>
        </div>
    );
}

function Order({ title, description, cover, price }: OrderItem) {
    return (
        <div className="flex items-center justify-between gap-x-8 gap-y-4">
            <div className="flex items-center gap-x-4">
                <div className="shrink-0 h-24 hidden md:block">
                    <Placeholder className="size-full aspect-video rounded-xl" title={cover} />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                        <span className="font-pelak-medium text-lg text-gray-800 dark:text-gray-200 line-clamp-1">{title}</span>
                        <div className="shrink-0 font-pelak-medium text-teal-500">
                            <span className="text-2xl">{price.toLocaleString("fa")}</span> <span className="text-sm">تومان</span>
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-8 line-clamp-1">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderItems;
