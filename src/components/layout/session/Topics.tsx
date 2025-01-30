import { getCourseTopics } from "@/api/queries/courses";

import Topic from "@/components/specific/session/Topic";

import Slice from "@/components/ui/Slice";

import Layers from "@/components/svgs/Layers";

type TopicsProps = { slug: string; hasAccess: boolean };

async function Topics({ slug, hasAccess }: TopicsProps) {
    const { data } = await getCourseTopics({ slug });

    return (
        <div className="space-y-6 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl w-full">
            <span className="flex items-center gap-x-2 font-pelak-medium">
                <Layers className="w-6" />
                سرفصل‌های دوره
            </span>
            <Slice className="dark:bg-gray-800" />
            <div className="space-y-2 max-h-[575px] overflow-auto with-custom-scroll pl-2">
                {data.topics.map((topic) => (
                    <Topic key={topic._id} {...topic} hasAccess={hasAccess} />
                ))}
            </div>
        </div>
    );
}

export default Topics;
