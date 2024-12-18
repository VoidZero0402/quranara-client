"use client";

import Selector, { SelectorItem } from "../Selector";

type ItemsPerPageProps = { pages: number; onChange: (pages: number) => () => void };

function ItemsPerPage({ pages, onChange }: ItemsPerPageProps) {
    return (
        <div className="space-y-4">
            <span className="font-pelak-medium text-gray-800 dark:text-gray-200">تعداد موجودیت در هر صفحه</span>
            <Selector className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-pelak-medium">
                <SelectorItem isActive={pages === 5} onSelect={onChange(5)}>
                    5 موجودیت
                </SelectorItem>
                <SelectorItem isActive={pages === 10} onSelect={onChange(10)}>
                    10 موجودیت
                </SelectorItem>
                <SelectorItem isActive={pages === 25} onSelect={onChange(25)}>
                    25 موجودیت
                </SelectorItem>
                <SelectorItem isActive={pages === 50} onSelect={onChange(50)}>
                    50 موجودیت
                </SelectorItem>
                <SelectorItem isActive={pages === 100} onSelect={onChange(100)}>
                    100 موجودیت
                </SelectorItem>
            </Selector>
        </div>
    );
}

export default ItemsPerPage;
