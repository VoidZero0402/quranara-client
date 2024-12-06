"use client";

import dynamic from "next/dynamic";

import Image from "@/components/ui/Image";
import { PlayerLoading } from "@/components/ui/Player";

const Player = dynamic(() => import("@/components/ui/Player"), { ssr: false, loading: PlayerLoading });

type HeaderPlayerProps = { cover: string; video?: string };

function HeaderPlayer({ video }: HeaderPlayerProps) {
    return (
        <>
            {video ? (
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
            ) : (
                <Image src="/webpack-1-768x432.webp" alt="course cover" width={800} height={500} className="rounded-xl" />
            )}
        </>
    );
}

export default HeaderPlayer;
