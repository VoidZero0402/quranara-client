"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Pagination from "./Pagination";
import DataTableSetting from "./DataTableSetting";
import Button from "../Button";

import LongArrowLeft from "../../svgs/LongArrowLeft";
import LongArrowRight from "../../svgs/LongArrowRight";

import { Entities } from "@/types/entities.types";

type DataTableAfterProps = { count: number; pagesCount: number; current: number; entity: Entities };

function DataTableAfter({ count, pagesCount, current, entity }: DataTableAfterProps) {
    const path = usePathname();

    return (
        <div className="sm:space-y-4">
            <div className="flex-center w-full p-4 bg-white dark:bg-gray-850 sm:rounded-xl">
                <Pagination pagesCount={pagesCount} current={current} />
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-4 p-4 sm:p-0">
                <span className="font-pelak-medium text-gray-800 dark:text-gray-200">
                    {pagesCount} صفحه، {count.toLocaleString()} موجودیت
                </span>
                <DataTableSetting entity={entity} />
            </div>
        </div>
    );
}

export default DataTableAfter;
