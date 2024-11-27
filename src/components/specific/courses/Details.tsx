"use client";

import { useSearchParams } from "next/navigation";

type DetailsProps = { count: number };

function Details({ count }: DetailsProps) {
    const searchParams = useSearchParams();

    return (
        <div className="flex items-center justify-between">
            <span className="font-pelak-medium sm:text-lg text-gray-600 dark:text-gray-400">
                {searchParams.get("search") ? (
                    <>
                        نتیجه جستجو برای <span className="font-pelak-semibold text-gray-800 dark:text-gray-200">{searchParams.get("search")}</span>
                    </>
                ) : (
                    "دوره‌های تخصصی قرآن‌آرا"
                )}
            </span>
            {Boolean(count) && <span className="font-pelak-medium sm:text-xl text-gray-800 dark:text-gray-200">{count} دوره تخصصی</span>}
        </div>
    );
}

export default Details;
