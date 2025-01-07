"use client";

import dynamic from "next/dynamic";

import Button from "@/components/ui/Button";
import { PlayerLoading } from "@/components/ui/Player";

const Player = dynamic(() => import("@/components/ui/Player"), { ssr: false, loading: PlayerLoading });

import VerifiedCheck from "@/components/svgs/VerifiedCheck";

function Introduction() {
    return (
        <section id="introduction" className="flex flex-col lg:flex-row items-center gap-x-16 gap-y-8">
            <div className="w-full lg:w-1/2">
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
            </div>
            <div className="flex flex-col gap-y-2 lg:w-1/2">
                <h2 className="font-pelak-semibold text-2xl sm:text-3xl/[1.5] text-gray-800 dark:text-gray-200">ویدیو معرفی آکادمی قرآن‌آرا</h2>
                <p className="sm:text-lg text-gray-600 dark:text-gray-400 leading-8 sm:leading-8">ویدیوی معرفی قرآن‌آرا داستان شکل‌گیری، اهداف و خدمات آن را روایت می‌کند. این آکادمی برای آموزش و مشاوره قرآنی طراحی شده و بستری برای پیشرفت علاقه‌مندان فراهم می‌کند. در ویدیوی معرفی قرآن‌آرا، حسین خانی، مؤسس این پلتفرم، داستان شکل‌گیری آن را روایت می‌کند و از تجربه‌های قرآنی خود می‌گوید.</p>
                <div className="mt-4">
                    <a href="#founder">
                        <Button size="lg" variant="neutral-base" className="gap-x-2 w-full sm:w-max">
                            <VerifiedCheck />
                            درباره مؤسس قرآن‌آرا بخوانید
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
