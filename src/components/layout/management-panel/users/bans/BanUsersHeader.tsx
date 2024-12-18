import UserBlockRounded from "@/components/svgs/UserBlockRounded";

function BanUsersHeader() {
    return (
        <div className="gap-8 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <UserBlockRounded className="w-8" />
                    مدیریت کاربران مسدود شده
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">کابران خودت رو مدیریت کن، سکان کشتی در دست توست!</p>
            </div>
        </div>
    );
}

export default BanUsersHeader;
