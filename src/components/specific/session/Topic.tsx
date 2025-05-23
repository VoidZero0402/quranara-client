"use client";

import { useRef } from "react";
import { useToggle } from "usehooks-ts";

import Session from "./Session";

import { type Topic } from "@/types/topic.types";

type TopicProps = Omit<Topic, "_id"> & { hasAccess: boolean };

function Topic({ title, sessions, meta, hasAccess }: TopicProps) {
    const [isOpen, toggleOpen] = useToggle();
    const sessionsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div>
            <div onClick={toggleOpen} className={`flex flex-col gap-4 p-4 font-pelak-medium rounded-xl cursor-pointer transition-all duration-300 ${isOpen ? "bg-blue-500 text-white dark:bg-blue-500" : "bg-gray-50 dark:bg-gray-800"}`}>
                <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                        <span>{meta.count} جلسه ویدیویی</span>
                    </div>
                    <span>
                        {!!meta.time.hours && `${meta.time.hours} ساعت و `} {meta.time.minutes} دقیقه
                    </span>
                </div>
                <span className="font-pelak-medium text-sm leading-8">{title}</span>
            </div>
            <div ref={sessionsRef} className={`space-y-2 transition-all duration-300 ${isOpen ? "mt-2 opacity-100" : "mt-0 opacity-0 overflow-hidden "}`} style={{ height: isOpen ? `${sessionsRef.current?.scrollHeight}px` : "0" }}>
                {sessions.map((session) => (
                    <Session key={session._id} {...session} hasAccess={hasAccess} />
                ))}
            </div>
        </div>
    );
}

export default Topic;
