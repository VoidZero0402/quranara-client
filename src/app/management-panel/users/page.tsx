import { Suspense } from "react";

import UsersDataTable from "@/components/layout/management-panel/users/UsersDataTable";

import UserGroup from "@/components/svgs/UserGroup";

function Users({ searchParams }: { searchParams: Promise<{ page: string; search: string }> }) {
    return (
        <div className="mt-4">
            <section className="space-y-8">
                <div className="space-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                        <UserGroup className="w-8" />
                        مدیریت کاربران
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">کابران خودت رو مدیریت کن، سکان کشتی در دست توست!</p>
                </div>
                <Suspense>
                    <UsersDataTable searchParams={searchParams} />
                </Suspense>
            </section>
        </div>
    );
}

export default Users;
