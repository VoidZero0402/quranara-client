"use client";

import { SOURCE } from "@/constants/comments";

import Selector, { SelectorItem } from "@/components/ui/Selector";

type SourceFilterProps = { source: string; onChange: (sourse: string) => () => void };

function SourceFilter({ source, onChange }: SourceFilterProps) {
    return (
        <div className="space-y-4">
            <span className="font-pelak-medium text-gray-800 dark:text-gray-200">منبع نظرات</span>
            <Selector className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-pelak-medium">
                <SelectorItem isActive={source === SOURCE.COURSE} onSelect={onChange(SOURCE.COURSE)}>
                    دوره‌ها
                </SelectorItem>
                <SelectorItem isActive={source === SOURCE.BLOG} onSelect={onChange(SOURCE.BLOG)}>
                    مقالات
                </SelectorItem>
                <SelectorItem isActive={source === SOURCE.TV} onSelect={onChange(SOURCE.TV)}>
                    آموزش‌ها
                </SelectorItem>
            </Selector>
        </div>
    );
}

export default SourceFilter;
