import Link from "next/link";

import ToggleTheme from "../specific/navbar/ToggleTheme";
import Navigation from "../specific/navbar/Navigation";

import SearchBar from "../ui/SearchBar";
import AccountWrapper from "../specific/navbar/AccountWrapper";
import Logo from "../ui/Logo";
import MobileNavbar from "../specific/navbar/MobileNavbar";

function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full max-w-[2000px] py-6 px-16 bg-white dark:bg-gray-850">
            <div className="flex items-center gap-x-8">
                <Link href="/">
                    <Logo className="h-12" />
                </Link>
                <Navigation />
            </div>
            <div className="flex items-center gap-x-4">
                <SearchBar route="/search" query="q" id="search-bar" placeholder="در قرآن‌ آرا جستجو کنید" wrapperCalssName="w-80" />
                <ToggleTheme />
                <AccountWrapper />
            </div>
        </nav>
    );
}

export default Navbar;
