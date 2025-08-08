"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import { PlayerLoading } from "@/components/ui/Player";
import { AudioPlayerLoading } from "@/components/ui/AudioPlayer";

const Player = dynamic(() => import("@/components/ui/Player"), { ssr: false, loading: PlayerLoading });
const AudioPlayer = dynamic(() => import("@/components/ui/AudioPlayer"), { ssr: false, loading: AudioPlayerLoading });

import { Session } from "@/types/session.types";
import Slice from "@/components/ui/Slice";
import Button from "@/components/ui/Button";
import PlayCircle from "@/components/svgs/PlayCircle";
import Copy from "@/components/svgs/Copy";
import QuestionCircle from "@/components/svgs/QuestionCircle";
import { TYPE } from "@/constants/sessions";

type DetailsProps = Pick<Session, "title" | "order" | "video" | "attached" | "type"> & { cover: string; topic: string };

function Details({ title, topic, video: media, cover, attached, type }: DetailsProps) {
    return (
        <section className="space-y-4 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
            {type === TYPE.VIDEO ? (
                <Player
                    source={{
                        type: "video",
                        poster: cover,
                        sources: [
                            {
                                src: media,
                            },
                        ],
                    }}
                />
            ) : (
                <AudioPlayer
                    source={{
                        type: "audio",
                        sources: [
                            {
                                src: media,
                            },
                        ],
                    }}
                />
            )}
            <div className="space-y-4">
                <span className="py-2 px-2.5 font-pelak-medium text-xs sm:text-sm gray-light rounded-lg leading-8 sm:leading-8">سرفصل {topic}</span>
                <div className="font-pelak-semibold">
                    <h1 className="sm:text-lg text-gray-800 dark:text-gray-200 leading-8 sm:leading-9">{title}</h1>
                </div>
            </div>
            <Slice className="dark:bg-gray-800" />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <a href={media} download data-disable-nprogress={true}>
                    <Button size="lg" className="w-full sm:w-max">
                        <PlayCircle />
                        {type === TYPE.VIDEO ? "دانلود ویدیو" : "دانلود فایل صوتی"}
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
