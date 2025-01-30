import Link from "next/link";

import { type Session } from "@/types/session.types";

type SessionProps = Omit<Session, "_id" | "seconds" | "video" | "attached" | "topic" | "course"> & { hasAccess: boolean };

function Session({ title, slug, time, isPublic, order, hasAccess }: SessionProps) {
    const isFree = hasAccess || isPublic;

    return (
        <Link href={isFree ? `/sessions/${slug}` : "#"} data-disable-nprogress={isFree} className={`flex flex-col gap-2 p-4 font-pelak-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded-xl ${!isFree ? "pointer-events-none" : ""}`}>
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                    <span>جلسه {order}</span>
                    {hasAccess ? <span className="text-xs text-teal-500">( مشاهده جلسه )</span> : isPublic ? <span className="text-xs text-teal-500">( جلسه رایگان )</span> : <span className="text-xs text-amber-400">( عدم دسترسی )</span>}
                </div>
                <span>{time}</span>
            </div>
            <span className="text-sm leading-8">{title}</span>
        </Link>
    );
}

export default Session;
