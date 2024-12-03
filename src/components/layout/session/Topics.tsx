import Topic from "@/components/specific/session/Topic";

import Slice from "@/components/ui/Slice";

import Layers from "@/components/svgs/Layers";

function Topics() {
    return (
        <div className="space-y-4 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <span className="flex items-center gap-x-2 font-pelak-medium">
                <Layers />
                سرفصل‌های دوره
            </span>
            <Slice />
            <div className="space-y-2">
                <Topic />
                <Topic />
                <Topic />
            </div>
        </div>
    );
}

export default Topics;
