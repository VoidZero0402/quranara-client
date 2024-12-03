"use client";

import { Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import Actions, { ActionsLoading } from "@/components/specific/tv/Actions";

import Button from "@/components/ui/Button";
import { PlayerLoading } from "@/components/ui/Player";

import Folder from "@/components/svgs/Folder";
import PlayCircle from "@/components/svgs/PlayCircle";
import Copy from "@/components/svgs/Copy";

import { Tv } from "@/types/tv.types";

const Player = dynamic(() => import("@/components/ui/Player"), { ssr: false, loading: PlayerLoading });

type DetailsProps = Pick<Tv, "_id" | "title" | "description" | "category" | "cover" | "video" | "attached">;

function Details({ _id, title, description, category, attached }: DetailsProps) {
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
            <div className="flex items-center gap-4">
                <Link href={`/tv?category=${category._id}`} className="flex items-center gap-x-2 py-2.5 px-4 font-pelak-medium amber-light rounded-xl">
                    <Folder />
                    {category.title}
                </Link>
            </div>
            <div className="space-y-2">
                <h1 className="font-pelak-semibold text-2xl text-gray-800 dark:text-gray-200 leading-10">{title}</h1>
                <p className="text-gray-600 dark:text-gray-400 leading-7">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-4">
                    <Button className="grow">
                        <PlayCircle />
                        دانلود ویدیو
                    </Button>
                    {attached && (
                        <Button variant="filled-secondary" className="grow">
                            <Copy />
                            دانلود پیوست
                        </Button>
                    )}
                </div>
                <Suspense fallback={<ActionsLoading />}>
                    <Actions _id={_id} />
                </Suspense>
            </div>
        </section>
    );
}

export default Details;
