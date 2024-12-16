"use client";

type PageSelectorProps = { isActive: boolean; onSelect: () => void } & React.ComponentProps<"div">;

type ItemsPerPageProps = { pages: number; onChange: (pages: number) => () => void };

function ItemsPerPage({ pages, onChange }: ItemsPerPageProps) {
    return (
        <div className="space-y-4">
            <span className="font-pelak-medium text-gray-800 dark:text-gray-200">تعداد موجودیت در هر صفحه</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-pelak-medium">
                <PageSelector isActive={pages === 5} onSelect={onChange(5)}>
                    5 موجودیت
                </PageSelector>
                <PageSelector isActive={pages === 10} onSelect={onChange(10)}>
                    10 موجودیت
                </PageSelector>
                <PageSelector isActive={pages === 25} onSelect={onChange(25)}>
                    25 موجودیت
                </PageSelector>
                <PageSelector isActive={pages === 50} onSelect={onChange(50)}>
                    50 موجودیت
                </PageSelector>
                <PageSelector isActive={pages === 100} onSelect={onChange(100)}>
                    100 موجودیت
                </PageSelector>
            </div>
        </div>
    );
}

function PageSelector({ children, isActive, onSelect }: PageSelectorProps) {
    return (
        <div className={`p-4 text-center w-full rounded-xl transition-all ${isActive ? "amber-light" : "gray-light cursor-pointer"}`} {...(!isActive && { onClick: onSelect })}>
            {children}
        </div>
    );
}

export default ItemsPerPage;
