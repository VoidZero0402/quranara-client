import LinkRoundAngle from "@/components/svgs/LinkRoundAngle";
import RelatedCourse from "./RelatedCourse";

import { RelatedCourse as RelatedCourseType } from "@/types/course.types";

type RelatedCoursesProps = { courses: RelatedCourseType[] };

function RelatedCourses({ courses }: RelatedCoursesProps) {
    return (
        <>
            {!!courses.length && (
                <div className="space-y-8 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl">
                    <div className="space-y-2">
                        <span className="flex items-center gap-x-2 font-pelak-medium">
                            <LinkRoundAngle />
                            دوره‌های مرتبط
                        </span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">دوره‌هایی که ممکن است به آن علاقه‌مند باشید</p>
                    </div>
                    <div className="space-y-4">
                        {courses.map((course) => (
                            <RelatedCourse key={course._id} {...course} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default RelatedCourses;
