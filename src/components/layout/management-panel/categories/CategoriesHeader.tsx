import Filters from "@/components/specific/management-panel/categories/Filters";
import CreateNew from "@/components/specific/management-panel/categories/CreateNew";

import Graph from "@/components/svgs/Graph";

function CategoriesHeader() {
    return (
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Graph className="w-8" />
                    مدیریت دسته‌بندی ها
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">دسته‌بندی های مقالات، آموزش‌ها و بحث و گفتگو رو مدیریت کن!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <Filters />
                <CreateNew />
            </div>
        </div>
    );
}

export default CategoriesHeader;
