"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Pagination from "./Pagination";
import DataTableSetting from "./DataTableSetting";
import Button from "../Button";

import LongArrowLeft from "../../svgs/LongArrowLeft";
import LongArrowRight from "../../svgs/LongArrowRight";

import { Entities } from "@/types/entities.types";

type DataTableAfterProps = { pagesCount: number; current: number; entity: Entities };

function DataTableAfter({ pagesCount, current, entity }: DataTableAfterProps) {
    const path = usePathname();

    return (
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 w-full p-4 bg-white dark:bg-gray-850 sm:rounded-xl">
            <div className="flex gap-x-2 w-full sm:w-max">
                <Link href={current !== pagesCount ? `${path}?page=${current + 1}` : ""} className="w-full sm:w-max">
                    <Button size="lg" variant="neutral-base" className="w-full sm:w-max" disabled={current === pagesCount}>
                        <LongArrowRight />
                        صفحه بعدی
                    </Button>
                </Link>
                <Link href={current !== 1 ? `${path}?page=${current - 1}` : ""} className="w-full sm:w-max">
                    <Button size="lg" variant="neutral-base" className="w-full sm:w-max" disabled={current === 1}>
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

export default DataTableAfter;
