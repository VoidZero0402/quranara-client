import { getMenus } from "@/api/queries/ui";

import MobileNavigation from "./MobileNavigation";

import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import Slice from "@/components/ui/Slice";
import Logo from "@/components/ui/Logo";

import XMark from "@/components/svgs/XMark";

async function MobileNavbar() {
    const { data } = await getMenus();

    return (
        <div className="fixed inset-0 size-full z-20">
            <div className="size-full bg-gray-500/10 dark:bg-gray-800/10"></div>
            <div className="flex flex-col gap-y-4 absolute right-0 top-0 bottom-0 w-72 h-full p-4 bg-white dark:bg-gray-850 overflow-auto with-custom-scroll">
                <div className="flex items-center justify-between">
                    <Logo className="h-12" />
                    <Button size="circle" rounded="lg" variant="neutral-base" className="size-12">
                        <XMark className="w-6" />
                    </Button>
                </div>
                <Slice />
                <SearchBar route="/search" query="q" id="search-bar" placeholder="در قرآن‌ آرا جستجو کنید" wrapperCalssName="w-full" />
                <Slice />
                <MobileNavigation menus={data} />
            </div>
        </div>
    );
}

export default MobileNavbar;
