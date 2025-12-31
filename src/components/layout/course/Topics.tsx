"use client";

import { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Topic from "@/components/specific/course/Topic";

import Layers from "@/components/svgs/Layers";

import { Topic as TopicType } from "@/types/topic.types";

type TopicsProps = { hasAccess: boolean; topics: TopicType[]; onInView: (section: string) => void };

function Topics({ hasAccess, topics, onInView }: TopicsProps) {
    const [ref, inView] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) onInView("topics");
    }, [inView]);

    return (
        <section ref={ref} className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl" id="topics">
            <h3 className="flex items-center gap-x-2 font-pelak-medium text-xl">
                <Layers className="w-8" />
                سرفصل‌های دوره
            </h3>
            <div className="space-y-4">
                {topics.map((topic) => (
                    <Topic key={topic._id} {...topic} hasAccess={hasAccess} />
                ))}
            </div>
        </section>
    );
}

export default memo(Topics);
