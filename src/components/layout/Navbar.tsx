import Link from "next/link";

import ToggleTheme from "../specific/navbar/ToggleTheme";
import Navigation from "../specific/navbar/Navigation";

import Button from "../ui/Button";
import SearchBar from "../ui/SearchBar";

import ArrowLogin from "../svgs/ArrowLogin";

function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full max-w-[2000px] py-6 px-16 bg-white dark:bg-gray-850">
            <div className="flex items-center gap-x-8">
                <Link href="/">
                    <h2 className="font-pelak-medium text-xl text-gray-800 dark:text-gray-300">QA Logo</h2>
                </Link>
                <Navigation />
            </div>
            <div className="flex items-center gap-x-4">
                <SearchBar id="search-bar" placeholder="در قرآن‌آرا جستجو کنید" wrapperCalssName="w-80" />
                <ToggleTheme />
                <Link href="/login">
                    <Button rounded="lg" variant="filled-primary" className="font-pelak-medium h-12">
                        <ArrowLogin className="w-6" strokeWidth={1.5} />
                        ورود | ثبت نام
                    </Button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
