"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";

import { getTvComments } from "@/api/queries/tv";

import Comments from "../shared/Comments";

type TvCommentsProps = { _id: string; slug: string };

function TvComments({ _id, slug }: TvCommentsProps) {
    const fetchComments = async ({ pageParam = 1 }: { pageParam: number }) => {
        return await getTvComments({ slug }, { page: pageParam, limit: 10 });
    };

    return (
        <Suspense>
            <Comments entity={{ name: "tv", _id }} queryKey={[`tv-comments-${slug}`]} fetcher={fetchComments} />
        </Suspense>
    );
}

export default TvComments;
