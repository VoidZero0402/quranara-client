"use client";

import { SOURCES } from "@/constants/categories";

import Selector, { SelectorItem } from "@/components/ui/Selector";

type SourceFilterProps = { source: string; onChange: (sourse: string) => () => void };

function SourceFilter({ source, onChange }: SourceFilterProps) {
    return (
        <div className="space-y-4">
            <span className="font-pelak-medium text-gray-800 dark:text-gray-200">منبع دسته‌بندی</span>
            <Selector className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-pelak-medium">
                <SelectorItem isActive={source === SOURCES.ALL} onSelect={onChange(SOURCES.ALL)}>
                    همه منابع
                </SelectorItem>
                <SelectorItem isActive={source === SOURCES.BLOG} onSelect={onChange(SOURCES.BLOG)}>
                    مقالات
                </SelectorItem>
                <SelectorItem isActive={source === SOURCES.TV} onSelect={onChange(SOURCES.TV)}>
                    آموزش‌ها
                </SelectorItem>
                <SelectorItem isActive={source === SOURCES.DISCUSSION} onSelect={onChange(SOURCES.DISCUSSION)}>
                    بحث و گفتگو
                </SelectorItem>
            </Selector>
        </div>
    );
}

export default SourceFilter;
