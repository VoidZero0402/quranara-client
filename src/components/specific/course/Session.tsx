import Link from "next/link";

import PlaybackSpeed from "@/components/svgs/PlaybackSpeed";

import { type Session } from "@/types/session.types";

type SessionProps = Omit<Session, "_id" | "seconds" | "video" | "attached" | "topic" | "course" | "type"> & { hasAccess: boolean };

function Session({ title, slug, time, isPublic, order, hasAccess }: SessionProps) {
    const isFree = hasAccess || isPublic;

    return (
        <Link href={isFree ? `/sessions/${slug}` : "#"} data-disable-nprogress={isFree} className={`flex flex-col gap-2 p-4 font-pelak-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded-xl ${!isFree ? "pointer-events-none" : ""}`}>
            <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                    <span>جلسه {order}</span>
                    {hasAccess ? <span className="text-xs text-teal-500">( مشاهده جلسه )</span> : isPublic ? <span className="text-xs text-teal-500">( جلسه رایگان )</span> : <span className="text-xs text-amber-400">( عدم دسترسی )</span>}
                </div>
                <div className="flex items-center gap-1">
                    <span>{time}</span>
                    <PlaybackSpeed className="w-5" />
                </div>
            </div>
            <span className="font-pelak-semibold text-sm sm:text-base leading-8 sm:leading-8">{title}</span>
        </Link>
    );
}

export default Session;
