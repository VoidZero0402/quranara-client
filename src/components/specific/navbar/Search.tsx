"use client";

import useToggle from "@/hooks/useToggle";

import { cn } from "@/libs/cn";

import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";

import Magnifer from "@/components/svgs/Magnifer";

function Search() {
    const { ref, isOpen, toggleOpen } = useToggle();

    return (
        <>
            <SearchBar route="/search" query="q" id="search-bar" placeholder="در قرآن‌ آرا جستجو کنید" wrapperCalssName="w-60 hidden xl:block" />
            <div ref={ref} className="relative hidden lg:block xl:hidden">
                <Button size="circle" rounded="lg" variant="neutral-base" className="size-12" onClick={toggleOpen}>
                    <Magnifer className="w-6" />
                </Button>
                <div className={cn("absolute left-0 mt-5 p-4 invisible opacity-0 bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 rounded-xl transition-all", isOpen && "visible opacity-100 mt-3")}>
                    <SearchBar route="/search" query="q" id="search-bar" placeholder="در قرآن‌ آرا جستجو کنید" wrapperCalssName="w-80" />
                </div>
            </div>
        </>
    );
}

export default Search;
