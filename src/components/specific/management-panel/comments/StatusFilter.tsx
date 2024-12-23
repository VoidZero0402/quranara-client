"use client";

import { STATUS } from "@/constants/comments";
import { ALL } from "@/constants/global";

import Selector, { SelectorItem } from "@/components/ui/Selector";

type StatusFilterProps = { status: string; onChange: (status: string) => () => void };

function StatusFilter({ status, onChange }: StatusFilterProps) {
    return (
        <div className="space-y-4">
            <span className="font-pelak-medium text-gray-800 dark:text-gray-200">وضعیت نظرات</span>
            <Selector className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-pelak-medium">
                <SelectorItem isActive={status === ALL} onSelect={onChange(ALL)}>
                    همه نظرات
                </SelectorItem>
                <SelectorItem isActive={status === STATUS.ACCEPTED} onSelect={onChange(STATUS.ACCEPTED)}>
                    نظرات تایید شده
                </SelectorItem>
                <SelectorItem isActive={status === STATUS.PENDING} onSelect={onChange(STATUS.PENDING)}>
                    نظرات در انتظار
                </SelectorItem>
                <SelectorItem isActive={status === STATUS.REJECTED} onSelect={onChange(STATUS.REJECTED)}>
                    نظرات رد شده
                </SelectorItem>
            </Selector>
        </div>
    );
}

export default StatusFilter;
