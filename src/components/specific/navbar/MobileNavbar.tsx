"use client";

import { useToggle } from "usehooks-ts";

import { cn } from "@/libs/cn";

import MobileNavigation from "./MobileNavigation";

import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import Slice from "@/components/ui/Slice";
import Logo from "@/components/ui/Logo";

import XMark from "@/components/svgs/XMark";
import HamburgerMenu from "@/components/svgs/HamburgerMenu";

import { Menus } from "@/types/ui.types";
import ToggleTheme from "./ToggleTheme";

type MobileNavbarProps = { menus: Menus };

function MobileNavbar({ menus }: MobileNavbarProps) {
    const [isOpen, toggleOpen] = useToggle();

    return (
        <>
            <Button size="circle" variant="neutral-base" className="size-12" onClick={toggleOpen}>
                <HamburgerMenu className="w-8" />
            </Button>
            <div className={cn("fixed inset-0 size-full z-20 invisible", isOpen && "visible")}>
                <div className={cn("h-screen bg-backdrop invisible opacity-0 transition-all duration-300", isOpen && "visible opacity-100")} onClick={toggleOpen}></div>
                <div className={cn("flex flex-col gap-y-4 absolute -right-72 top-0 bottom-0 w-72 h-screen p-4 bg-white dark:bg-gray-850 overflow-auto with-custom-scroll transition-all duration-300 transform-gpu", isOpen && "right-0")}>
                    <div className="flex items-center justify-between">
                        <Logo className="h-12" />
                        <div className="flex gap-x-4">
                            <ToggleTheme />
                            <Button size="circle" variant="neutral-base" className="size-12" onClick={toggleOpen}>
                                <XMark />
                            </Button>
                        </div>
                    </div>
                    <Slice />
                    <SearchBar route="/search" query="q" id="search-bar" placeholder="در قرآن‌ آرا جستجو کنید" wrapperCalssName="w-full" />
                    <Slice />
                    <MobileNavigation menus={menus} />
                </div>
            </div>
        </>
    );
}

export default MobileNavbar;
