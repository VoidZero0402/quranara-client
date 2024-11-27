import Link from "next/link";

import Eye from "@/components/svgs/Eye";
import Heart from "@/components/svgs/Heart";

import { LimitedBlog } from "@/types/blog.types";

function RelatedBlog({ title, slug, description, views, likes, timeToRead }: LimitedBlog) {
    return (
        <Link href={`/blog/${slug}`} className="group flex flex-col gap-y-4 relative p-4 bg-[#f6f7f8] dark:bg-gray-800 rounded-xl">
            <div className="space-y-2">
                <span className="font-pelak-semibold text-sm text-gray-800 dark:text-gray-200 group-hover:text-amber-400 transition-all line-clamp-1">{title}</span>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-6 line-clamp-2">{description}</p>
            </div>
            <div className="flex items-center justify-between">
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
                <span className="font-pelak-medium text-xs text-gray-600 dark:text-gray-400">{timeToRead} دقیقه برای مطالعه</span>
            </div>
        </Link>
    );
}

export default RelatedBlog;
