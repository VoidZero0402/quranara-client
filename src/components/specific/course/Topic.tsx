"use client";

import { memo, useRef } from "react";
import { useToggle } from "usehooks-ts";

import Session from "./Session";

import ArrowDown from "@/components/svgs/ArrowDown";
import PlayCircle from "@/components/svgs/PlayCircle";

import { type Topic } from "@/types/topic.types";

type TopicProps = Omit<Topic, "_id"> & { hasAccess: boolean };

function Topic({ title, order, sessions, hasAccess }: TopicProps) {
    const [isOpen, toggleOpen] = useToggle();
    const sessionsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="flex flex-col gap-y-4">
            <div onClick={toggleOpen} className={`flex items-center justify-between gap-2 p-6 font-pelak-medium rounded-2xl cursor-pointer transition-all duration-300 ${isOpen ? "bg-blue-500 text-white dark:bg-blue-500" : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                <div className={`flex items-center gap-x-2 xs:gap-x-4 transition-all duration-300 ${isOpen ? "text-white" : "text-gray-800 dark:text-gray-200"}`}>
                    <PlayCircle />
                    <span className="hidden xs:block shrink-0">بخش {order}</span>
                    <span className="hidden xs:block h-6 w-[1px] bg-gray-200"></span>
                    <span className="line-clamp-2">{title}</span>
                </div>
                <ArrowDown />
            </div>
            <div ref={sessionsRef} className={`space-y-2 overflow-hidden transition-all duration-300 ${isOpen ? "mb-4 opacity-100" : "opacity-0"}`} style={{ height: isOpen ? `${sessionsRef.current?.scrollHeight}px` : "0" }}>
                {sessions.map((session) => (
                    <Session key={session._id} {...session} isPublic={hasAccess || session.isPublic} />
                ))}
            </div>
        </div>
    );
}

export default memo(Topic);
