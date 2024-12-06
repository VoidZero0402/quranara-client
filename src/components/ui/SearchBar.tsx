"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next-nprogress-bar";

import { cn } from "@/libs/cn";
import { updateURLSearchParams } from "@/libs/funcs";

import Magnifer from "../svgs/Magnifer";

type SearchBarProps = { route: string; query: string; wrapperCalssName?: string; empty?: boolean } & React.ComponentProps<"input">;

function SearchBar({ route, query, wrapperCalssName, empty = false, className, id, placeholder }: SearchBarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fromData = new FormData(e.currentTarget);

        const search = fromData.get("search") as string;

        if (!empty && !search) {
            return;
        }

        const url = updateURLSearchParams(route, query, search);

        router.push(url, { scroll: false });
    };

    return (
        <form onSubmit={onSubmit} className={cn("relative", wrapperCalssName)}>
            <input name="search" defaultValue={searchParams.get(query) ?? ""} type="text" placeholder={placeholder} id={id} className={cn("py-2.5 px-4 w-full h-12 bg-gray-100 dark:bg-gray-500/10 text-sm text-gray-600 dark:text-gray-200 border border-transparent focus:border-gray-200 dark:focus:border-gray-700 rounded-2xl placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors", className)} />
            <div className="flex-center absolute left-3 top-0 bottom-0 m-auto text-gray-600 dark:text-gray-200">
                <button type="submit">
                    <Magnifer className="w-6" />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;
