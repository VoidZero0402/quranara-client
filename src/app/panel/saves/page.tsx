import { Suspense } from "react";

import Blogs, { BlogsLoading } from "@/components/layout/panel/saves/Blogs";
import Tvs, { TvsLoading } from "@/components/layout/panel/saves/Tvs";

function Saves() {
    return (
        <div className="space-y-16 py-8 px-4 sm:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
            <Suspense fallback={<BlogsLoading />}>
                <Blogs />
            </Suspense>
            <Suspense fallback={<TvsLoading />}>
                <Tvs />
            </Suspense>
        </div>
    );
}

export default Saves;
