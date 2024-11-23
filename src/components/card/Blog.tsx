import Link from "next/link";

import Placeholder from "../ui/Placeholder";
import Badge from "../ui/Badge";

import Eye from "../svgs/Eye";
import Heart from "../svgs/Heart";
import Calendar from "../svgs/Calendar";
import Slice from "../ui/Slice";

import { LimitedBlog } from "@/types/blog.types";

function Blog({ title, slug, description, cover, category, views, likes, timeToRead, updatedAt }: LimitedBlog) {
    return (
        <div className="bg-white dark:bg-gray-850 rounded-2xl overflow-hidden">
            <div>
                <Link href={`/blog/${slug}`}>
                    <Placeholder className="aspect-video rounded-xl" title={cover} />
                </Link>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <Badge color="secondary">{category.title}</Badge>
                <h3 className="font-pelak-medium text-lg text-gray-800 dark:text-gray-200 line-clamp-1">
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
                <p className="h-18 text-sm text-gray-600 dark:text-gray-400 leading-6 line-clamp-3">{description}</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex gap-x-2">
                        <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm blue-light rounded-lg">
                            <Eye className="w-4" />
                            <span className="h-4.5">{views}</span>
                        </div>
                        <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm red-light rounded-lg">
                            <Heart className="w-4" />
                            <span className="h-4.5">{likes}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm gray-light rounded-lg">
                        <Calendar className="w-4" />
                        <span className="h-4.5">{new Date(updatedAt).toLocaleDateString("fa")}</span>
                    </div>
                </div>
            </div>
            <Slice className="mx-4 dark:bg-gray-800" />
            <div className="p-4">
                <div className="flex items-center gap-x-1 font-pelak-medium text-xs text-gray-500">
                    <span className="block size-1.5 bg-gray-500 rounded-full"></span>
                    <span className="h-4">{timeToRead} دقیقه برای مطالعه</span>
                </div>
            </div>
        </div>
    );
}

export default Blog;
