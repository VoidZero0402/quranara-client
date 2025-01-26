"use client";

import { memo, useEffect, useRef } from "react";
import { useToggle } from "usehooks-ts";

import Session from "./Session";

import IconButton from "@/components/ui/IconButton";

import Layers from "@/components/svgs/Layers";
import PenSquare from "@/components/svgs/PenSquare";
import PlaybackSpeed from "@/components/svgs/PlaybackSpeed";
import PlayCircle from "@/components/svgs/PlayCircle";

import { type Topic, LimitedTopic } from "@/types/topic.types";
import { PopulatedSession } from "@/types/session.types";

type TopicProps = { topic: Topic; onUpdate: (topic: LimitedTopic) => void; onCreateSession: (topic: LimitedTopic) => void; onUpdateSession: (session: PopulatedSession) => void; onRemoveSession: (session: PopulatedSession) => void };

function Topic({ topic, onUpdate, onCreateSession, onUpdateSession, onRemoveSession }: TopicProps) {
    const [isOpen, toggleOpen] = useToggle();
    const sessionsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            sessionsRef.current!.style.height = "auto";
        }
    }, [topic]);

    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white dark:bg-gray-850 rounded-xl">
                <div className={`flex items-center gap-x-2 w-full sm:w-max transition-all duration-300 ${isOpen ? "text-blue-500 dark:text-amber-400" : "text-gray-800 dark:text-gray-200"}`}>
                    <PlayCircle className="w-6 hidden sm:block" />
                    <span className="font-pelak-medium">{topic.title}</span>
                </div>
                <div className="flex gap-x-2 self-end">
                    <IconButton label="مدیریت جلسات" onClick={toggleOpen}>
                        <Layers />
                    </IconButton>
                    <IconButton label="ایجاد جلسه جدید" onClick={() => onCreateSession({ _id: topic._id, title: topic.title, order: topic.order, course: topic.course })}>
                        <PlaybackSpeed />
                    </IconButton>
                    <IconButton label="ویرایش" onClick={() => onUpdate({ _id: topic._id, title: topic.title, order: topic.order, course: topic.course })}>
                        <PenSquare />
                    </IconButton>
                </div>
            </div>
            <div ref={sessionsRef} className={`lg:mr-6 space-y-4 transition-all duration-300 ${isOpen ? "mt-4 opacity-100" : "mt-0 opacity-0 overflow-hidden"}`} style={{ height: isOpen ? `${sessionsRef.current?.scrollHeight}px` : "0" }}>
                {topic.sessions.map((session) => (
                    <Session key={session._id} session={session} onUpdate={onUpdateSession} onRemove={onRemoveSession} />
                ))}
            </div>
        </div>
    );
}

export default memo(Topic);
