"use client";

import { REFERENCES } from "@/constants/categories";
import { ALL } from "@/constants/global";

import Selector, { SelectorItem } from "@/components/ui/Selector";

type SourceFilterProps = { source: string; onChange: (sourse: string) => () => void };

function SourceFilter({ source, onChange }: SourceFilterProps) {
    return (
        <div className="space-y-4">
            <span className="font-pelak-medium text-gray-800 dark:text-gray-200">منبع دسته‌بندی</span>
            <Selector className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-pelak-medium">
                <SelectorItem isActive={source === ALL} onSelect={onChange(ALL)}>
                    همه منابع
                </SelectorItem>
                <SelectorItem isActive={source === REFERENCES.BLOG} onSelect={onChange(REFERENCES.BLOG)}>
                    مقالات
                </SelectorItem>
                <SelectorItem isActive={source === REFERENCES.TV} onSelect={onChange(REFERENCES.TV)}>
                    آموزش‌ها
                </SelectorItem>
                <SelectorItem isActive={source === REFERENCES.DISCUSSION} onSelect={onChange(REFERENCES.DISCUSSION)}>
                    بحث و گفتگو
                </SelectorItem>
            </Selector>
        </div>
    );
}

export default SourceFilter;
