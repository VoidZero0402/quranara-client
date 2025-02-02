import Link from "next/link";

import { getTvs } from "@/api/queries/tv";

import Tv, { TvLoading } from "@/components/card/Tv";

import Button from "@/components/ui/Button";

import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import PlayCircle from "@/components/svgs/PlayCircle";
import Magnifer from "@/components/svgs/Magnifer";

type TvsProps = { query: string };

async function Tvs({ query }: TvsProps) {
    const { data } = await getTvs({ page: 1, limit: 8, sort: "default", search: query });

    return (
        <section className="space-y-8" id="tv">
            <div className="flex  flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <PlayCircle className="w-8" />
                        <h2 className="font-pelak-semibold text-2xl">ویدیوهای آموزشی قرآن‌آرا</h2>
                    </div>
                    <p className="font-pelak-medium text-gray-500">نتیجه جستجوی &quot;{query}&quot; در ویدیوهای آموزشی قرآن‌آرا</p>
                </div>
                <Link href="/tv">
                    <Button size="lg" variant="text-primary">
                        مشاهده همه آموزش‌ها
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            {!!data.tvs.length ? (
                <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {data.tvs.map((tv) => (
                            <Tv key={tv._id} {...tv} />
                        ))}
                    </div>
                    {data.pagination.pagesCount !== 1 && (
                        <div className="flex-center py-10">
                            <Link href={`/tv?search=${query}`}>
                                <Button size="lg">
                                    <Magnifer />
                                    جستجوی کامل در آموزش‌ها
                                </Button>
                            </Link>
                        </div>
                    )}
                </>
            ) : (
                <EmptyState query={query} />
            )}
        </section>
    );
}

function EmptyState({ query }: TvsProps) {
    return (
        <div className="flex-center col-span-4 py-10">
            <span className="font-pelak-medium text-center sm:text-lg text-gray-600 dark:text-gray-400 leading-8 sm:leading-8">آموزشی در نتیجه جستجو &quot;{query}&quot; پیدا نشد</span>
        </div>
    );
}

export function TvsLoading({ query }: TvsProps) {
    return (
        <section className="space-y-8" id="tv">
            <div className="flex  flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <PlayCircle className="w-8" />
                        <h2 className="font-pelak-semibold text-2xl">ویدیوهای آموزشی قرآن‌آرا</h2>
                    </div>
                    <p className="font-pelak-medium text-gray-500">نتیجه جستجوی &quot;{query}&quot; در ویدیوهای آموزشی قرآن‌آرا</p>
                </div>
                <Link href="/tv">
                    <Button size="lg" variant="text-primary">
                        مشاهده همه آموزش‌ها
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <TvLoading />
                <TvLoading />
                <TvLoading />
                <TvLoading />
            </div>
        </section>
    );
}

export default Tvs;
