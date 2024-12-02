"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";

import { getBlogComments } from "@/api/queries/blog";

import Comments from "../shared/Comments";

function BlogComments() {
    const { slug } = useParams<{ slug: string }>();

    const fetchComments = async ({ pageParam = 1 }: { pageParam: number }) => {
        return await getBlogComments({ slug }, { page: pageParam, limit: 10 });
    };

    return (
        <Suspense>
            <Comments queryKey={[`blog-comments-${slug}`]} fetcher={fetchComments} />
        </Suspense>
    );
}

export default BlogComments;
