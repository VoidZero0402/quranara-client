import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCourse, getCourseTopics } from "@/api/queries/courses";

import { BASE_URL } from "@/constants/global";

import Header from "@/components/layout/course/Header";
import Main from "@/components/layout/course/Main";
import Teacher from "@/components/layout/course/Teacher";
import Progress from "@/components/layout/course/Progress";

import JSONLD from "@/components/JSONLD";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<void | Metadata> {
    const { slug } = await params;

    const {
        data: { course },
        success,
    } = await getCourse({ slug });

    if (success) {
        return {
            title: course.title,
            description: course.description,
            creator: course.teacher.username,
            openGraph: {
                title: course.title,
                description: course.description,
                url: `${BASE_URL}/courses/${course.slug}`,
                siteName: "قرآن‌آرا",
                images: [
                    {
                        url: course.cover,
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

async function page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const [
        {
            data: { course },
            status,
        },
        {
            data: { topics },
        },
    ] = await Promise.all([getCourse({ slug }), getCourseTopics({ slug })]);

    if (status === 404) {
        notFound();
    }

    const JSONLinkedData = {
        "@context": "https://schema.org",
        "@type": "Product",
        headline: course.title,
        description: course.description,
        author: course.teacher.username,
        datePublished: course.createdAt,
        publisher: {
            "@type": "Organization",
            name: "Quranara",
        },
        url: `${BASE_URL}/courses/${course.slug}`,
    };

    return (
        <div className="my-8">
            <Header _id={course._id} title={course.title} description={course.description} price={course.price} discount={course.discount} status={course.status} cover={course.cover} video={course.introduction?.video} />
            <div className="container">
                <div className="flex flex-col-reverse xl:flex-row gap-8 mt-12">
                    <Main _id={course._id} topics={topics} slug={slug} content={course.introduction?.content} time={course.time} metadata={course.metadata} updatedAt={course.updatedAt} />
                    <aside className="flex flex-col gap-8 w-full xl:w-[30%]">
                        <Teacher teacher={course.teacher} />
                        <Progress progress={course.progress} hours={course.time[0]} />
                    </aside>
                </div>
            </div>
            <JSONLD data={JSONLinkedData} />
        </div>
    );
}

export default page;
