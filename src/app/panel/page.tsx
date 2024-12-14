import { Suspense } from "react";

import Welcome from "@/components/layout/panel/index/Welcome";
import LastNotification from "@/components/layout/panel/index/LastNotification";
import Courses from "@/components/layout/panel/index/Courses";
import Tickets from "@/components/layout/panel/index/Tickets";
import Questions from "@/components/layout/panel/index/Questions";

function Panel() {
    return (
        <div className="space-y-4 bg-gray-50 dark:bg-gray-900">
            <Welcome />
            <Suspense fallback={null}>
                <LastNotification />
            </Suspense>
            <Courses />
            <div className="flex flex-col min-[1480px]:flex-row gap-4">
                <Tickets />
                <Questions />
            </div>
        </div>
    );
}

export default Panel;
