import Link from "next/link";

import { getMenus } from "@/api/queries/ui";

import ToggleTheme from "@/components/specific/navbar/ToggleTheme";
import Navigation from "@/components/specific/navbar/Navigation";
import Search from "@/components/specific/navbar/Search";
import AccountWrapper from "@/components/specific/navbar/AccountWrapper";
import MobileNavbar from "@/components/specific/navbar/MobileNavbar";

import Logo from "@/components/ui/Logo";

async function Navbar() {
    const { data } = await getMenus();

    return (
        <nav className="sm:py-4 sm:px-16 z-20">
            <div className="flex items-center justify-between gap-x-4 relative w-full max-w-[2000px] m-auto p-4 sm:py-6 sm:px-8 bg-white dark:bg-gray-850 sm:rounded-xl shadow-xl shadow-gray-100 dark:shadow-none z-20">
                <div className="flex items-center gap-x-4 md:gap-x-8">
                    <div className="lg:hidden">
                        <MobileNavbar menus={data} />
                    </div>
                    <Link href="/" className="absolute sm:static md:absolute lg:static left-0 right-0 m-auto w-max block lg:hidden xl:block">
                        <Logo className="h-12" />
                    </Link>
                    <Navigation menus={data} />
                </div>
                <div className="flex items-center gap-x-4">
                    <Search />
                    <div className="hidden sm:block">
                        <ToggleTheme />
                    </div>
                    <AccountWrapper />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
