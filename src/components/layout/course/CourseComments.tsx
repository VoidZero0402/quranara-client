"use client";

import { memo, Suspense, useEffect } from "react";
import { useParams } from "next/navigation";
import { useInView } from "react-intersection-observer";

import { getCourseComments } from "@/api/queries/courses";

import Comments from "../shared/Comments";

type CommentsProps = { _id: string; slug: string; onInView: (section: string) => void };

function CourseComments({ _id, slug, onInView }: CommentsProps) {
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) onInView("comments");
    }, [inView]);

    const fetchComments = async ({ pageParam = 1 }: { pageParam: number }) => {
        return await getCourseComments({ slug }, { page: pageParam, limit: 10 });
    };

    return (
        <div ref={ref}>
            <Suspense>
                <Comments entity={{ name: "course", _id }} queryKey={[`course-comments-${slug}`]} fetcher={fetchComments} />
            </Suspense>
        </div>
    );
}

export default memo(CourseComments);
