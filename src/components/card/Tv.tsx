import Link from "next/link";

import Placeholder from "../ui/Placeholder";
import Badge from "../ui/Badge";

import Eye from "../svgs/Eye";
import Heart from "../svgs/Heart";
import Calendar from "../svgs/Calendar";
import Play from "../svgs/Play";

import { LimitedTv } from "@/types/tv.types";

function Tv({ title, slug, description, category, cover, views, likes, createdAt }: LimitedTv) {
    return (
        <div className="bg-white dark:bg-gray-850 overflow-hidden rounded-2xl">
            <div>
                <Link href={`/tv/${slug}`} className="relative group">
                    <Placeholder className="aspect-video rounded-xl" title={cover} />
                    <div className="flex-center absolute inset-0 m-auto size-16 bg-white/10 rounded-full transition-all duration-300 group-hover:size-18">
                        <div className="flex-center size-12 bg-white/10 border border-white/20 rounded-full">
                            <Play className="w-6" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <Badge color="secondary">{category.title}</Badge>
                <h3 className="font-pelak-medium text-lg text-gray-800 dark:text-gray-200 line-clamp-1">
                    <Link href={`/tv/${slug}`}>{title}</Link>
                </h3>
                <p className="line-clamp-3 h-18 text-sm text-gray-600 dark:text-gray-400 leading-6">{description}</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex gap-x-2">
                        <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm bg-blue-50 dark:bg-blue-500/10 text-blue-500 rounded-lg">
                            <Eye className="w-4" strokeWidth={1.5} />
                            <span className="h-4.5">{views}</span>
                        </div>
                        <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm bg-red-50 dark:bg-red-500/10 text-red-500 rounded-lg">
                            <Heart className="w-4" />
                            <span className="h-4.5">{likes}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-1 py-1 px-2 font-pelak-medium text-sm bg-gray-100 dark:bg-gray-500/10 text-gray-500 dark:text-gray-300 rounded-lg">
                        <Calendar className="w-4" strokeWidth={1.5} />
                        <span className="h-4.5">{new Date(createdAt).toLocaleDateString("fa")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tv;
