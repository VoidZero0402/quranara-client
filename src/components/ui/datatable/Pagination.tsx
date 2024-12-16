"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { calculatePaginationPages } from "@/libs/funcs";

import LinkMinimize from "@/components/svgs/LinkMinimize";

type PaginationProps = { pagesCount: number; current: number };

type PageProps = { page: number; current: number; href: string };

function Pagination({ pagesCount, current }: PaginationProps) {
    const path = usePathname();

    const { start, end, hasSeparator } = calculatePaginationPages(pagesCount, current);    

    return (
        <div className="flex flex-row-reverse gap-x-2">
            {start.map((page) => (
                <Page key={page} page={page} current={current} href={`${path}?page=${page}`} />
            ))}
            {hasSeparator && <Separator />}
            {end.map((page) => (
                <Page key={page} page={page} current={current} href={`${path}?page=${page}`} />
            ))}
        </div>
    );
}

function Page({ page, current, href }: PageProps) {
    const isActive = page === current;

    return (
        <Link href={href} className={`flex-center size-10 font-pelak-medium rounded-lg transition-all ${isActive ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500/15 disabled:bg-gray-200 dark:disabled:bg-gray-500/15"}`} scroll={false}>
            {page}
        </Link>
    );
}

function Separator() {
    return (
        <div className="flex-center size-10 text-gray-600 dark:text-gray-400">
            <LinkMinimize />
        </div>
    );
}

export default Pagination;
