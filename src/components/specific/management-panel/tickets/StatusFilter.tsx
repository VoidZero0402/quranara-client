"use client";

import { STATUS } from "@/constants/tickets";
import { ALL } from "@/constants/global";

import Selector, { SelectorItem } from "@/components/ui/Selector";

type StatusFilterProps = { status: string; onChange: (status: string) => () => void };

function StatusFilter({ status, onChange }: StatusFilterProps) {
    return (
        <div className="space-y-4">
            <span className="font-pelak-medium text-gray-800 dark:text-gray-200">وضعیت تیکت</span>
            <Selector className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-pelak-medium">
                <SelectorItem isActive={status === ALL} onSelect={onChange(ALL)}>
                    همه تیکت‌ها
                </SelectorItem>
                <SelectorItem isActive={status === STATUS.ACTIVE} onSelect={onChange(STATUS.ACTIVE)}>
                    تیکت‌های فعال
                </SelectorItem>
                <SelectorItem isActive={status === STATUS.SLEEP} onSelect={onChange(STATUS.SLEEP)}>
                    تیکت‌های در انتظار
                </SelectorItem>
                <SelectorItem isActive={status === STATUS.COLSED} onSelect={onChange(STATUS.COLSED)}>
                    تیکت‌های بسته شده
                </SelectorItem>
            </Selector>
        </div>
    );
}

export default StatusFilter;
