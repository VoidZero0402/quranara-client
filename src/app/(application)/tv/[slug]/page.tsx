import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getTv } from "@/api/queries/tv";

import { BASE_URL } from "@/constants/global";

import { increaseViews } from "@/libs/redis";

import Header from "@/components/layout/tv/Header";
import RelatedTvs from "@/components/layout/tv/RelatedTvs";
import Details from "@/components/layout/tv/Details";
import TvContent from "@/components/layout/tv/TvContent";
import TvComments from "@/components/layout/tv/TvComments";

import JSONLD from "@/components/JSONLD";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<void | Metadata> {
    const { slug } = await params;

    const {
        data: { tv },
        success,
    } = await getTv({ slug });

    if (success) {
        return {
            title: tv.title,
            description: tv.description,
            category: tv.category.title,
            creator: tv.publisher.username,
            openGraph: {
                title: tv.title,
                description: tv.description,
                url: `${BASE_URL}/tv/${tv.slug}`,
                siteName: "قرآن‌آرا",
                images: [
                    {
                        url: tv.cover,
                        width: 1280,
                        height: 720,
                    },
                ],
                locale: "fa_IR",
                type: "video.tv_show",
            },
        };
    }
}

async function Tv({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const {
        data: { tv },
        status,
    } = await getTv({ slug });

    if (status === 404) {
        notFound();
    }

    increaseViews("tv", tv._id);

    const JSONLinkedData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: tv.title,
        description: tv.description,
        author: tv.publisher.username,
        datePublished: tv.createdAt,
        publisher: {
            "@type": "Organization",
            name: "Quranara",
        },
        url: `${BASE_URL}/tv/${tv.slug}`,
    };

    return (
        <div className="my-8">
            <Header title={tv.title} category={tv.category} />
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-8 mt-12 mb-8">
                    <main className="space-y-8 w-full xl:w-[70%]">
                        <section className="space-y-8">
                            <Details _id={tv._id} title={tv.title} description={tv.description} category={tv.category} cover={tv.cover} video={tv.video} attached={tv.attached} />
                            {!!tv.content && <TvContent content={tv.content} />}
                        </section>
                    </main>
                    <aside className="flex flex-col md:flex-row xl:flex-col gap-8 w-full xl:w-[30%]">
                        <RelatedTvs slug={slug} />
                    </aside>
                </div>
                <div className="flex gap-8">
                    <div className="w-full xl:w-[70%]">
                        <TvComments _id={tv._id} slug={slug} />
                    </div>
                    <div className="hidden xl:block w-[30%]"></div>
                </div>
            </div>
            <JSONLD data={JSONLinkedData} />
        </div>
    );
}

export default Tv;
