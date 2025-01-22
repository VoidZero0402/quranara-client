"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import Image from "@/components/ui/Image";
import Button from "@/components/ui/Button";

import "swiper/css";

import LinkCircle from "@/components/svgs/LinkCircle";

import { News } from "@/types/news.types";

type NewsSlidesProps = { news: News[] };

function NewsSlides({ news }: NewsSlidesProps) {
    return (
        <div>
            <Swiper modules={[Autoplay, Navigation]} spaceBetween={32} loop autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }} navigation={{ nextEl: ".next-news-btn", prevEl: ".prev-news-btn" }}>
                {news.map((slide) => {
                    return (
                        <SwiperSlide key={slide._id}>
                            <NewsSlide {...slide} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

function NewsSlide({ cover, title, description, link }: News) {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 space-y-4">
                <h3 className="font-pelak-semibold text-2xl/[1.5] sm:text-3xl/[1.5] text-gray-800 dark:text-gray-200">{title}</h3>
                <p className="sm:text-lg text-gray-600 dark:text-gray-400 leading-8">{description}</p>
                {link && (
                    <div>
                        <Link href={link.url}>
                            <Button size="lg">
                                <LinkCircle />
                                {link.text}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
            <div className="aspect-[2/1] w-full lg:w-1/2">
                <Image src={cover} alt={title} width={720} height={360} wrapperClassName="rounded-xl" />
            </div>
        </div>
    );
}

export default NewsSlides;
