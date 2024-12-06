"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import { PlayerLoading } from "@/components/ui/Player";

const Player = dynamic(() => import("@/components/ui/Player"), { ssr: false, loading: PlayerLoading });

import { Session } from "@/types/session.types";
import Slice from "@/components/ui/Slice";
import Button from "@/components/ui/Button";
import PlayCircle from "@/components/svgs/PlayCircle";
import Copy from "@/components/svgs/Copy";
import QuestionCircle from "@/components/svgs/QuestionCircle";

type DetailsProps = Pick<Session, "title" | "order" | "video" | "attached"> & { cover: string; topic: string };

function Details({ title, order, topic, video, attached }: DetailsProps) {
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
                <div className="flex items-center gap-x-2 font-pelak-medium text-sm sm:text-base text-gray-600 dark:text-gray-400">سرفصل {topic}</div>
                <div className="flex items-center gap-x-2">
                    <span className="flex-center p-2.5 font-pelak-medium text-sm gray-light rounded-xl">جلسه {order}</span>
                    <h1 className="font-pelak-semibold text-xl sm:text-2xl text-gray-800 dark:text-gray-200 leading-10">{title}</h1>
                </div>
            </div>
            <Slice className="dark:bg-gray-800" />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <a href={video} download data-disable-nprogress={true}>
                    <Button size="lg" className="w-full sm:w-max">
                        <PlayCircle />
                        دانلود ویدیو
                    </Button>
                </a>
                <div className="flex flex-col sm:flex-row gap-4">
                    {attached && (
                        <a href={attached} download data-disable-nprogress={true}>
                            <Button size="lg" variant="filled-secondary" className="w-full sm:w-max">
                                <Copy />
                                دانلود پیوست
                            </Button>
                        </a>
                    )}
                    <Link href="#question">
                        <Button size="lg" variant="neutral-base" className="w-full sm:w-max">
                            <QuestionCircle />
                            پرسش و پاسخ
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Details;
