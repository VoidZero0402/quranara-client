import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getBlog } from "@/api/queries/blog";

import Header from "@/components/layout/blog/Header";

import { increaseViews } from "@/libs/redis";

import Details from "@/components/layout/blog/Details";
import Headings from "@/components/layout/blog/Headings";
import Content from "@/components/layout/content/Content";
import RelatedBlogs from "@/components/layout/blog/RelatedBlogs";
import RelatedCourses from "@/components/layout/blog/RelatedCourses";
import BlogComments from "@/components/layout/blog/BlogComments";

import Author from "@/components/specific/blog/Author";
import Actions, { ActionsLoading } from "@/components/specific/blog/Actions";

import Slice from "@/components/ui/Slice";

import JSONLD from "@/components/JSONLD";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<void | Metadata> {
    const { slug } = await params;

    const {
        data: { blog },
        success,
    } = await getBlog({ slug });

    if (success) {
        return {
            title: blog.title,
            description: blog.description,
            category: blog.category.title,
            creator: blog.author.username,
            openGraph: {
                title: blog.title,
                description: blog.description,
                url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog/${blog.slug}`,
                siteName: "قرآن‌آرا",
                images: [
                    {
                        url: blog.cover,
                        width: 1280,
                        height: 720,
                    },
                ],
                locale: "fa_IR",
                type: "article",
            },
        };
    }
}

async function Blog({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const {
        data: { blog },
        status,
    } = await getBlog({ slug });

    if (status === 404) {
        notFound();
    }

    increaseViews("blog", blog._id);

    const JSONLinkedData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: blog.description,
        author: blog.author.username,
        datePublished: blog.createdAt,
        publisher: {
            "@type": "Organization",
            name: "Quranara",
        },
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog/${blog.slug}`,
    };

    return (
        <div className="my-8">
            <Header title={blog.title} category={blog.category} />
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-8 mt-12 mb-8">
                    <main className="space-y-8 w-full xl:w-[70%]">
                        <section className="space-y-8 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
                            <article className="space-y-12">
                                <Details title={blog.title} description={blog.description} category={blog.category} cover={blog.cover} timeToRead={blog.timeToRead} />
                                {!!blog.headings.length && <Headings headings={blog.headings} />}
                                <Content content={blog.content} />
                            </article>
                            <Slice />
                            <div className="flex flex-col xs:flex-row items-center justify-between gap-y-4">
                                <Author />
                                <Suspense fallback={<ActionsLoading />}>
                                    <Actions _id={blog._id} />
                                </Suspense>
                            </div>
                        </section>
                    </main>
                    <aside className="flex flex-col md:flex-row xl:flex-col gap-8 w-full xl:w-[30%]">
                        <RelatedBlogs slug={slug} />
                        <RelatedCourses courses={blog.relatedCourses} />
                    </aside>
                </div>
                <div className="flex gap-8">
                    <div className="w-full xl:w-[70%]">
                        <BlogComments _id={blog._id} slug={slug} />
                    </div>
                    <div className="hidden xl:block w-[30%]"></div>
                </div>
            </div>
            <JSONLD data={JSONLinkedData} />
        </div>
    );
}

export default Blog;
