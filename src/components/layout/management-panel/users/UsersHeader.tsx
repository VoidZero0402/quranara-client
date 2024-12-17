import SearchBar from "@/components/ui/SearchBar";

import UserGroup from "@/components/svgs/UserGroup";

function UsersHeader() {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <UserGroup className="w-8" />
                    مدیریت کاربران
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">کابران خودت رو مدیریت کن، سکان کشتی در دست توست!</p>
            </div>
            <div className="md:w-80">
                <SearchBar query="search" placeholder="جستجو در بین کاربران قرآن‌آرا" className="p-4 h-14" />
            </div>
        </div>
    );
}

export default UsersHeader;
