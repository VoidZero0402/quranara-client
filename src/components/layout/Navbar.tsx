"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import ToggleTheme from "../specific/navbar/ToggleTheme";
import Navigation from "../specific/navbar/Navigation";
import { AccountLoading } from "../specific/navbar/Account";

const Account = dynamic(() => import("../specific/navbar/Account"), { ssr: false, loading: AccountLoading });

import SearchBar from "../ui/SearchBar";

function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full max-w-[2000px] py-6 px-16 bg-white dark:bg-gray-850">
            <div className="flex items-center gap-x-8">
                <Link href="/">
                    <h2 className="font-pelak-medium text-xl text-gray-800 dark:text-gray-200">QA Logo</h2>
                </Link>
                <Navigation />
            </div>
            <div className="flex items-center gap-x-4">
                <SearchBar id="search-bar" placeholder="در قرآن‌ آرا جستجو کنید" wrapperCalssName="w-80" />
                <ToggleTheme />
                <Account />
            </div>
        </nav>
    );
}

export default Navbar;
