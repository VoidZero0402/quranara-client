import type { Metadata } from "next";

import { BASE_URL } from "@/constants/global";

import Header from "@/components/layout/about-us/Header";
import Introduction from "@/components/layout/about-us/Introduction";
import Story from "@/components/layout/about-us/Story";
import CTA from "@/components/layout/about-us/CTA";
import Founder from "@/components/layout/about-us/Founder";
import Activities from "@/components/layout/about-us/Activities";

import JSONLD from "@/components/JSONLD";

export const metadata: Metadata = {
    title: "درباره آکادمی قرآن‌آرا",
    description: "از ایده ساخت قرآن‌آرا گرفته تا هدف اصلی آن در ترویج مهارت‌های قرآنی، در این صفحه با داستان شکل‌گیری، تجربه‌های مؤسس، خدمات آموزشی، مشاوره تخصصی، و دستاوردهای مهم این آکادمی آشنا می‌شوید.",
    openGraph: {
        title: "درباره آکادمی قرآن‌آرا",
        description: "از ایده ساخت قرآن‌آرا گرفته تا هدف اصلی آن در ترویج مهارت‌های قرآنی، در این صفحه با داستان شکل‌گیری، تجربه‌های مؤسس، خدمات آموزشی، مشاوره تخصصی، و دستاوردهای مهم این آکادمی آشنا می‌شوید.",
        url: `${BASE_URL}/about-us`,
        siteName: "قرآن‌آرا",
        images: [
            {
                url: "https://nextjs.org/og.png",
                width: 1280,
                height: 720,
            },
        ],
        locale: "fa_IR",
        type: "article",
    },
};

const JSONLinkedData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "درباره آکادمی قرآن‌آرا",
    description: "داستان شکل‌گیری، تجربه‌های مؤسس، خدمات آموزشی، مشاوره تخصصی، و دستاوردهای مهم قرآن‌آرا",
    author: "حسین خانی",
    datePublished: new Date().toString(),
    publisher: {
        "@type": "Organization",
        name: "Quranara",
    },
    url: `${BASE_URL}/about-us`,
};

function AboutUs() {
    return (
        <div className="my-8">
            <Header />
            <main className="my-20">
                <div className="container space-y-32">
                    <Introduction />
                    <Story />
                    <CTA />
                    <Founder />
                    <Activities />
                </div>
            </main>
            <JSONLD data={JSONLinkedData} />
        </div>
    );
}

export default AboutUs;
