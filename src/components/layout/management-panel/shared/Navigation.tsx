import Link from "next/link";

import { getFullDate } from "@/libs/funcs";
import { getCookieUser } from "@/libs/server/funcs";

import Sidebar from "./Sidebar";
import ToggleTheme from "@/components/specific/navbar/ToggleTheme";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

async function Navigation() {
    const user = await getCookieUser();
    
    return (
        <>
            <nav className="flex items-center justify-between py-4 px-4 sm:px-8 h-[88px] bg-white dark:bg-gray-850 sm:rounded-2xl">
                <Sidebar user={user} />
                <div className="hidden sm:flex items-center gap-x-4 font-pelak-medium">
                    <span className="text-gray-600 dark:text-gray-400">
                        سلام <span className="text-gray-800 dark:text-gray-200">{user.username}</span> عزیز💙، خوش اومدی
                    </span>
                    <div className="h-6 min-w-[1px] bg-gray-200 dark:bg-gray-700"></div>
                    <span className="text-sm text-gray-800 dark:text-gray-200">{getFullDate()}</span>
                </div>
                <div className="sm:hidden">
                    <Logo className="h-12" />
                </div>
                <div className="flex gap-x-2">
                    <Link href="/" className="hidden lg:block">
                        <Button variant="neutral-base" className="h-12">
                            برو به صفحه اصلی
                        </Button>
                    </Link>
                    <ToggleTheme />
                </div>
            </nav>
            <div className="sm:hidden font-pelak-medium text-gray-600 dark:text-gray-400 text-center my-4">
                سلام <span className="text-gray-800 dark:text-gray-200">{user.username}</span> عزیز💙، خوش اومدی
            </div>
        </>
    );
}

export default Navigation;
