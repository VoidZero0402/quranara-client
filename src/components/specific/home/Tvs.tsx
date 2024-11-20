import Link from "next/link";

import { getAllTvs } from "@/api/queries/tv";

import Tv from "@/components/card/Tv";

import Button from "@/components/ui/Button";

import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import PlayCircle from "@/components/svgs/PlayCircle";

async function Tvs() {
    const { data } = await getAllTvs({ limit: "4" });

    return (
        <section className="space-y-8" id="tv">
            <div className="flex  flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <PlayCircle className="w-8" strokeWidth={1.5} />
                        <h2 className="font-pelak-semibold text-2xl">ویدیوهای آموزشی رایگان</h2>
                    </div>
                    <p className="text-gray-500 font-pelak-medium">ویدیوهای کاربردی برای آشنایی با قرآن</p>
                </div>
                <Link href="/tv">
                    <Button size="lg" rounded="lg" variant="text-primary" className="font-pelak-medium">
                        مشاهده همه آموزش‌ها
                        <LongArrowLeft className="w-6" strokeWidth={1.5} />
                    </Button>
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {data.tvs.map((tv) => (
                    <Tv key={tv._id} {...tv} />
                ))}
            </div>
        </section>
    );
}

export default Tvs;
