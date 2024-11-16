"use client";

import { cn } from "@/libs/cn";

import Magnifer from "../svgs/Magnifer";

type SearchBarProps = { wrapperCalssName?: string } & React.ComponentProps<"input">

function SearchBar({ wrapperCalssName, className, id, placeholder }: SearchBarProps) {
    return (
        <div className={cn("relative", wrapperCalssName)}>
            <input type="text" placeholder={placeholder} id={id} className={cn("py-3 px-5 w-full h-12 bg-gray-100 dark:bg-gray-500/10 text-sm text-gray-600 dark:text-gray-200 border border-transparent focus:border-gray-200 dark:focus:border-gray-700 rounded-2xl placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors", className)} />
            <div className="flex-center absolute left-3 top-0 bottom-0 m-auto text-gray-600 dark:text-gray-200">
                <button type="submit">
                    <Magnifer className="w-6" />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
