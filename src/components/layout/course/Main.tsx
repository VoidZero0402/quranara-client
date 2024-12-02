import { Suspense } from "react";

import Navigation from "./Navigation";
import Details from "./Details";
import IntroContent from "./IntroContent";
import Topics, { TopicsLoading } from "./Topics";

import Comments from "../shared/Comments";

import { Course } from "@/types/course.types";

type MainProps = Pick<Course, "_id" | "time" | "metadata" | "updatedAt"> & { content: string };

function Main({ _id, content, time, metadata, updatedAt }: MainProps) {
    return (
        <main className="space-y-8 w-[70%]">
            <Navigation />
            <Details time={time} metadata={metadata} updatedAt={updatedAt} />
            <IntroContent />
            <Suspense fallback={<TopicsLoading />}>
                <Topics _id={_id} />
            </Suspense>
            <Comments />
        </main>
    );
}

export default Main;
