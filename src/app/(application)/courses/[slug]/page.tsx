import { notFound } from "next/navigation";

import { getCourse, getCourseTopics } from "@/api/queries/courses";

import Header from "@/components/layout/course/Header";
import Main from "@/components/layout/course/Main";
import Teacher from "@/components/layout/course/Teacher";
import Progress from "@/components/layout/course/Progress";

export const dynamic = "force-static";

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

    return (
        <div className="my-8">
            <Header _id={course._id} title={course.title} description={course.description} price={course.price} discount={course.discount} status={course.status} cover={course.cover} video={course.introduction?.video} />
            <div className="container">
                <div className="flex flex-col-reverse xl:flex-row gap-8 mt-12">
                    <Main _id={course._id} topics={topics} slug={slug} content={course.introduction?.content} time={course.time} metadata={course.metadata} updatedAt={course.updatedAt} />
                    <aside className="flex flex-col md:flex-row xl:flex-col gap-8 w-full xl:w-[30%]">
                        <Teacher />
                        <Progress progress={course.progress} hours={course.time[0]} />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default page;
