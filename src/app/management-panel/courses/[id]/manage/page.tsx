import { notFound } from "next/navigation";

import { getRawCourse, getCourseTopics } from "@/api/queries/courses";

import ManageCourseHeader from "@/components/layout/management-panel/courses/manage/ManageCourseHeader";
import TopicSessionManager from "@/components/layout/management-panel/courses/manage/TopicSessionManager";

async function ManageCourse({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const {
        data: { course },
        status,
    } = await getRawCourse({ courseId: id });

    if (status === 404) {
        notFound();
    }

    const { data } = await getCourseTopics({ slug: course.slug });

    return (
        <div className="space-y-8">
            <ManageCourseHeader course={{ _id: course._id, title: course.title, slug: course.slug }} />
            <TopicSessionManager topics={data.topics} slug={course.slug} />
        </div>
    );
}

export default ManageCourse;
