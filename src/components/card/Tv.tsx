import Link from "next/link";

import Image from "../ui/Image";
import Badge from "../ui/Badge";
import Skeleton, { SkeletonFrame } from "../ui/Skeleton";

import Eye from "../svgs/Eye";
import Heart from "../svgs/Heart";
import Calendar from "../svgs/Calendar";
import Play from "../svgs/Play";

import { LimitedTv } from "@/types/tv.types";

function Tv({ title, slug, description, category, cover, views, likes, createdAt }: LimitedTv) {
    return (
        <div className="bg-white dark:bg-gray-850 rounded-2xl overflow-hidden">
            <div>
                <Link href={`/tv/${slug}`} className="relative group">
                    <div className="aspect-video">
                        <Image src={cover} alt={title} width={640} height={360} wrapperClassName="rounded-xl" />
                    </div>
                    <div className="flex-center absolute inset-0 m-auto size-16 bg-white/10 rounded-full transition-all duration-300 group-hover:size-18">
                        <div className="flex-center size-12 bg-white/10 border border-white/20 rounded-full">
                            <Play className="w-6 text-white" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <Badge color="secondary" className="rounded-lg">
                    {category.title}
                </Badge>
                <div className="h-30 space-y-1">
                    <h3 className="font-pelak-semibold text-gray-800 dark:text-gray-200 leading-7 line-clamp-2">
                        <Link href={`/tv/${slug}`}>{title}</Link>
                    </h3>
                    <p className="h-14 text-sm text-gray-600 dark:text-gray-400 leading-7 line-clamp-2">{description}</p>
                </div>
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
                        <span className="h-4.5">{new Date(createdAt).toLocaleDateString("fa")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TvLoading() {
    return (
        <Skeleton className="rounded-2xl">
            <div className="aspect-video">
                <SkeletonFrame className="rounded-xl"></SkeletonFrame>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <SkeletonFrame className="h-6 w-20"></SkeletonFrame>
                <div className="h-30 space-y-2">
                    <div className="space-y-1.5">
                        <SkeletonFrame className="h-5.5"></SkeletonFrame>
                        <SkeletonFrame className="h-5.5 w-3/4"></SkeletonFrame>
                    </div>
                    <div className="space-y-2">
                        <SkeletonFrame className="h-5"></SkeletonFrame>
                        <SkeletonFrame className="h-5 w-3/4"></SkeletonFrame>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex gap-x-2 w-1/2">
                        <SkeletonFrame className="w-1/2 h-6.5"></SkeletonFrame>
                        <SkeletonFrame className="w-1/2 h-6.5"></SkeletonFrame>
                    </div>
                    <SkeletonFrame className="w-1/3 h-6.5"></SkeletonFrame>
                </div>
            </div>
        </Skeleton>
    );
}

export default Tv;
