import { getRelatedBlogs } from "@/api/queries/blog";

import RelatedBlog from "../../specific/blog/RelatedBlog";

import LinkRoundAngle from "@/components/svgs/LinkRoundAngle";

type RelatedBlogsProps = { slug: string };

async function RelatedBlogs({ slug }: RelatedBlogsProps) {
    const { data } = await getRelatedBlogs({ slug });

    return (
        <div className="space-y-8 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-2 font-pelak-medium">
                    <LinkRoundAngle />
                    مقالات مرتبط
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">مقالاتی که ممکن است دوست داشته باشید</p>
            </div>
            <div className="space-y-4">
                {data.blogs.map((blog) => (
                    <RelatedBlog key={blog._id} {...blog} />
                ))}
            </div>
        </div>
    );
}

export default RelatedBlogs;
