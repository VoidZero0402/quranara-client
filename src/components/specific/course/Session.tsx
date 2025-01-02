import Link from "next/link";

import Button from "@/components/ui/Button";

import Lock from "@/components/svgs/Lock";
import PlaybackSpeed from "@/components/svgs/PlaybackSpeed";

import { type Session } from "@/types/session.types";

type SessionProps = Omit<Session, "_id" | "seconds" | "video" | "attached" | "topic" | "course">;

function Session({ title, slug, time, isPublic, order }: SessionProps) {
    return (
        <div className="group flex items-center justify-between p-4 h-[76px] font-pelak-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center gap-x-2 group-hover:text-blue-500 dark:group-hover:text-amber-400 transition-all">
                <span className="flex-center shrink-0 size-8 text-sm gray-light group-hover:blue-light dark:group-hover:amber-light rounded-md transition-all">{order}</span>
                <Link href={isPublic ? `/sessions/${slug}` : ""} className={`text-sm sm:text-base ${isPublic ? "" : "pointer-events-none"}`}>
                    {title}
                </Link>
            </div>
            <div className="flex items-center gap-x-4 shrink-0">
                <div className="hidden sm:block">
                    {isPublic ? (
                        <Link href={`/sessions/${slug}`}>
                            <Button size="sm" rounded="base" variant="neutral-base">
                                مشاهده ویدیو
                            </Button>
                        </Link>
                    ) : (
                        <Lock />
                    )}
                </div>
                <div className="flex items-center justify-end gap-x-2 w-20">
                    <span className="h-5">{time}</span>
                    <PlaybackSpeed className="w-6 shrink-0 hidden sm:block" />
                    <div className="sm:hidden">{isPublic ? <PlaybackSpeed className="w-6 shrink-0" /> : <Lock />}</div>
                </div>
            </div>
        </div>
    );
}

export default Session;
