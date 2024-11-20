"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Blog from "@/components/card/Blog";

import "swiper/css";
import "swiper/css/pagination";

import { LimitedBlog } from "@/types/blog.types";

type BlogSlidesProps = { blogs: LimitedBlog[] };

function BlogSlides({ blogs }: BlogSlidesProps) {
    return (
        <div className="space-y-8">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={32}
                breakpoints={{
                    1280: { slidesPerView: 4 },
                    1024: { slidesPerView: 3 },
                    640: { slidesPerView: 2 },
                }}
                pagination={{ el: ".blog-swiper-pagination", clickable: true }}
                loop
                autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
                className="blog-swiper rounded-2xl"
            >
                {blogs.map((blog) => {
                    return (
                        <SwiperSlide key={blog._id} className="sm:max-w-[288px] md:max-w-[352px] lg:max-w-[309.33px] xl:max-w-[288px] ml-8">
                            <Blog {...blog} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="swiper-pagination blog-swiper-pagination"></div>
        </div>
    );
}

export default BlogSlides;
