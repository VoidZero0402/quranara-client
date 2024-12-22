import CreateNew from "@/components/specific/management-panel/discounts/CreateNew";
import GlobalDiscount from "@/components/specific/management-panel/discounts/GlobalDiscount";

import Discount from "@/components/svgs/Discount";

function DiscountsHeader() {
    return (
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Discount className="w-8" />
                    مدیریت تخفیفات
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">روی تمامی تخفیف‌ها و قیمت‌ها کنترل کامل داشته باش!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <GlobalDiscount />
                <CreateNew />
            </div>
        </div>
    );
}

export default DiscountsHeader;
