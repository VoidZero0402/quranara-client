"use client";

function ItemsPerPage() {
    return (
        <div className="space-y-4">
            <span className="font-pelak-medium text-gray-800 dark:text-gray-200">تعداد موجودیت در هر صفحه</span>
            <div className="grid grid-cols-3 gap-4 font-pelak-medium">
                <div className="p-4 text-center gray-light w-full rounded-xl">5 موجودیت</div>
                <div className="p-4 text-center gray-light w-full rounded-xl">10 موجودیت</div>
                <div className="p-4 text-center gray-light w-full rounded-xl">25 موجودیت</div>
                <div className="p-4 text-center gray-light w-full rounded-xl">50 موجودیت</div>
                <div className="p-4 text-center gray-light w-full rounded-xl">100 موجودیت</div>
            </div>
        </div>
    );
}

export default ItemsPerPage;
