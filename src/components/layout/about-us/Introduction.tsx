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
                        poster: "https://dl.quranara.com/static/caverdarbarema.jpg",
                        sources: [
                            {
                                src: "https://dl.quranara.com/static/darbarema.mp4",
                            },
                        ],
                    }}
                />
            </div>
            <div className="flex flex-col gap-y-2 lg:w-1/2">
                <h2 className="font-pelak-semibold text-2xl sm:text-3xl/[1.5] text-gray-800 dark:text-gray-200">ویدیو معرفی آکادمی قرآن‌آرا</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-8">در این ویدیو می‌تونید خیلی جامع و کامل با آکادمی قرآن‌آرا آشنا بشید. حسین خانی، مؤسس قرآن‌آرا از چگونگی شکل‌گیری این پلتفرم صحبت می‌کنه و بخش‌های مختلف اون رو براتون شرح می‌ده. پس اگه می‌خواین قرآن‌آرا و مؤسس اون رو بهتر بشناسید، حتما ویدیو معرفی قرآن‌آرا رو ببینید</p>
                <div className="mt-4">
                    <a href="#founder">
                        <Button size="lg" variant="neutral-base" className="gap-x-2 w-full sm:w-max">
                            <VerifiedCheck />
                            درباره مؤسس قرآن‌آرا بخونید
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Introduction;
