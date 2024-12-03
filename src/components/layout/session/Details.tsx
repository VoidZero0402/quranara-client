"use client";

import dynamic from "next/dynamic";

import { PlayerLoading } from "@/components/ui/Player";

const Player = dynamic(() => import("@/components/ui/Player"), { ssr: false, loading: PlayerLoading });

import { Session } from "@/types/session.types";
import Slice from "@/components/ui/Slice";
import Button from "@/components/ui/Button";
import PlayCircle from "@/components/svgs/PlayCircle";
import Copy from "@/components/svgs/Copy";
import QuestionCircle from "@/components/svgs/QuestionCircle";

type DetailsProps = Pick<Session, "title" | "video" | "attached"> & { cover: string; topic: string };

function Details({ title, topic, attached }: DetailsProps) {
    return (
        <section className="space-y-4 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
            <Player
                source={{
                    type: "video",
                    poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
                    sources: [
                        {
                            src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
                        },
                    ],
                }}
            />
            <div className="space-y-4">
                <div className="flex items-center gap-x-2 font-pelak-medium text-gray-600 dark:text-gray-400">سرفصل {topic}</div>
                <div className="flex items-center gap-x-2">
                    <span className="flex-center p-2.5 font-pelak-medium text-sm gray-light rounded-xl">جلسه 12</span>
                    <h1 className="font-pelak-semibold text-2xl text-gray-800 dark:text-gray-200 leading-10">{title}</h1>
                </div>
            </div>
            <Slice className="dark:bg-gray-800" />
            <div className="flex justify-between">
                <Button size="lg">
                    <PlayCircle />
                    دانلود ویدیو
                </Button>
                <div className="flex gap-x-4">
                    {attached && (
                        <Button size="lg" variant="filled-secondary">
                            <Copy />
                            دانلود پیوست
                        </Button>
                    )}
                    <Button size="lg" variant="neutral-base">
                        <QuestionCircle />
                        پرسش و پاسخ
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Details;
