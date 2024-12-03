import Lock from "@/components/svgs/Lock";

import Link from "next/link";

import { type Session } from "@/types/session.types";

type SessionProps = Omit<Session, "_id" | "seconds" | "video" | "attached" | "topic" | "course">;

function Session({ title, slug, time, isPublic, order }: SessionProps) {
    return (
        <div className="group flex items-center justify-between relative p-4 font-pelak-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center gap-x-2 group-hover:text-blue-500 dark:group-hover:text-amber-400 transition-all">
                <span className="flex-center shrink-0 size-8 text-sm gray-light group-hover:blue-light dark:group-hover:amber-light rounded-md transition-all">{order}</span>
                <Link href={isPublic ? `/sessions/${slug}` : ""} className={`text-sm ${isPublic ? "" : "pointer-events-none"}`}>
                    {title}
                </Link>
            </div>
            <div className="flex items-center gap-x-2">
                {!isPublic && <Lock className="w-5" />}
                <span className="text-sm text-gray-600 dark:text-gray-400">{time}</span>
            </div>
        </div>
    );
}

export default Session;
