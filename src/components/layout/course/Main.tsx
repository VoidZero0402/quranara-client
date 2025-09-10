"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";

import Navigation from "./Navigation";
import Details from "./Details";
import IntroContent from "./IntroContent";
import { TopicsLoading } from "./Topics";
const Topics = dynamic(() => import("./Topics"), { ssr: false, loading: TopicsLoading });

import Comments from "./CourseComments";

import { Course } from "@/types/course.types";
import { Topic } from "@/types/topic.types";

type MainProps = Pick<Course, "_id" | "slug" | "time" | "metadata" | "updatedAt"> & { content?: string; topics: Topic[] };

function Main({ _id, topics, slug, content, time, metadata, updatedAt }: MainProps) {
    const [section, setSection] = useState("details");

    const onInView = useCallback((section: string) => setSection(section), []);

    return (
        <main className="flex flex-col gap-8 w-full xl:w-[70%]">
            <Navigation section={section} />
            <Details time={time} metadata={metadata} updatedAt={updatedAt} onInView={onInView} />
            {!!content && <IntroContent content={content} onInView={onInView} />}
            <Topics _id={_id} topics={topics} onInView={onInView} />
            <Comments _id={_id} slug={slug} onInView={onInView} />
        </main>
    );
}

export default Main;
