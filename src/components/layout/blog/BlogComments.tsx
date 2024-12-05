"use client";

import { Suspense } from "react";

import { getBlogComments } from "@/api/queries/blog";

import Comments from "../shared/Comments";

type BlogCommentsProps = { _id: string; slug: string }

function BlogComments({ _id, slug }: BlogCommentsProps) {
    const fetchComments = async ({ pageParam = 1 }: { pageParam: number }) => {
        return await getBlogComments({ slug }, { page: pageParam, limit: 10 });
    };

    return (
        <Suspense>
            <Comments entity={{ name: "blog", _id }} queryKey={[`blog-comments-${slug}`]} fetcher={fetchComments} />
        </Suspense>
    );
}

export default BlogComments;
