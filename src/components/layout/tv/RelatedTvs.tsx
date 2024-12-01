import { getRelatedTvs } from "@/api/queries/tv";

import RelatedTv from "@/components/specific/tv/RelatedTv";

import LinkRoundAngle from "@/components/svgs/LinkRoundAngle";

type RelatedTvsProps = { slug: string };

async function RelatedTvs({ slug }: RelatedTvsProps) {
    const { data } = await getRelatedTvs({ slug });

    return (
        <div className="space-y-8 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-2 font-pelak-medium">
                    <LinkRoundAngle />
                    آموزش‌های مرتبط
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">آموزش‌هایی که ممکن است دوست داشته باشید</p>
            </div>
            <div className="space-y-4">
                {data.tvs.map((tv) => (
                    <RelatedTv key={tv._id} {...tv} />
                ))}
            </div>
        </div>
    );
}

export default RelatedTvs;
