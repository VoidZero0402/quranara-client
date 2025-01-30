"use client";

import dynamic from "next/dynamic";

import Image from "@/components/ui/Image";
import { PlayerLoading } from "@/components/ui/Player";

const Player = dynamic(() => import("@/components/ui/Player"), { ssr: false, loading: PlayerLoading });

type IntroPlayerProps = { title: string; cover: string; video?: string };

function IntroPlayer({ title, cover, video }: IntroPlayerProps) {
    return (
        <>
            {video ? (
                <Player
                    source={{
                        type: "video",
                        poster: cover,
                        sources: [
                            {
                                src: video,
                            },
                        ],
                    }}
                />
            ) : (
                <div className="aspect-video">
                    <Image src={cover} alt={title} width={1600} height={900} wrapperClassName="rounded-xl" />
                </div>
            )}
        </>
    );
}

export default IntroPlayer;
