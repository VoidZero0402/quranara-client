"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { getPagination } from "@/libs/funcs";

import ArrowLeft from "@/components/svgs/ArrowLeft";
import ArrowRight from "@/components/svgs/ArrowRight";
import DoubleArrowLeft from "@/components/svgs/DoubleArrowLeft";
import DoubleArrowRight from "@/components/svgs/DoubleArrowRight";

type PaginationProps = { pagesCount: number; current: number };

type PageProps = { isActive?: boolean; href: string } & React.ComponentProps<"a">;

type ButtonProps = { href: string } & React.ComponentProps<"a">;

function Pagination({ pagesCount, current }: PaginationProps) {
    const path = usePathname();

    const { pagination } = getPagination(pagesCount, current);

    return (
        <div className="space-y-2">
            <div className="flex flex-row-reverse justify-center gap-x-2">
                <div className="hidden sm:flex flex-row-reverse gap-x-2">
                    <LinkButton href={`${path}?page=${1}`}>
                        <DoubleArrowLeft />
                    </LinkButton>
                    <LinkButton href={current !== 1 ? ` ${path}?page=${current - 1}` : ""}>
                        <ArrowLeft />
                    </LinkButton>
                </div>
                {pagination.map((page) => (
                    <Page key={page} isActive={page === current} href={`${path}?page=${page}`}>
                        {page}
                    </Page>
                ))}
                <div className="hidden sm:flex flex-row-reverse gap-x-2">
                    <LinkButton href={current !== pagesCount ? `${path}?page=${current + 1}` : ""}>
                        <ArrowRight />
                    </LinkButton>
                    <LinkButton href={`${path}?page=${pagesCount}`}>
                        <DoubleArrowRight />
                    </LinkButton>
                </div>
            </div>
            <div className="flex sm:hidden flex-row-reverse justify-between">
                <div className="flex flex-row-reverse gap-x-2">
                    <LinkButton href={`${path}?page=${1}`}>
                        <DoubleArrowLeft />
                    </LinkButton>
                    <LinkButton href={current !== 1 ? ` ${path}?page=${current - 1}` : ""}>
                        <ArrowLeft />
                    </LinkButton>
                </div>
                <div className="flex flex-row-reverse gap-x-2">
                    <LinkButton href={current !== pagesCount ? `${path}?page=${current + 1}` : ""}>
                        <ArrowRight />
                    </LinkButton>
                    <LinkButton href={`${path}?page=${pagesCount}`}>
                        <DoubleArrowRight />
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}

function Page({ children, isActive, href }: PageProps) {
    return (
        <Link href={href} className={`flex-center size-12 font-pelak-medium rounded-xl transition-all ${isActive ? "bg-amber-400 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500/15 disabled:bg-gray-200 dark:disabled:bg-gray-500/15"}`} scroll={false}>
            {children}
        </Link>
    );
}

function LinkButton({ children, href }: ButtonProps) {
    return (
        <Link href={href} className="flex-center size-12 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all" scroll={false}>
            {children}
        </Link>
    );
}

export default Pagination;
