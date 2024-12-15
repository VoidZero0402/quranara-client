"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Pagination from "./Pagination";
import DataTableSetting from "./DataTableSetting";
import Button from "../Button";

import LongArrowLeft from "../../svgs/LongArrowLeft";
import LongArrowRight from "../../svgs/LongArrowRight";

type DataTableFooterProps = { pagesCount: number; current: number, entity: string };

function DataTableFooter({ pagesCount, current, entity }: DataTableFooterProps) {
    const path = usePathname();

    return (
        <div className="flex items-center justify-between w-full p-4 bg-white dark:bg-gray-850 rounded-xl">
            <div className="flex gap-x-2">
                <Link href={`${path}?page=${current + 1}`}>
                    <Button size="lg" variant="neutral-base" disabled={current === pagesCount}>
                        <LongArrowRight />
                        صفحه بعدی
                    </Button>
                </Link>
                <Link href={`${path}?page=${current - 1}`}>
                    <Button size="lg" variant="neutral-base" disabled={current === 1}>
                        صفحه قبلی
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            <Pagination pagesCount={pagesCount} current={current} />
            <DataTableSetting entity={entity} />
        </div>
    );
}

export default DataTableFooter;
