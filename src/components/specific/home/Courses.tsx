import { getAllCourses } from "@/api/queries/courses";

import Course from "@/components/card/Course";

import Button from "@/components/ui/Button";

import Layers from "@/components/svgs/Layers";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";

async function Courses() {
    const { data } = await getAllCourses({ page: "1", limit: "8" });

    return (
        <section className="space-y-8">
            <div className="flex  flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-0">
                <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-start">
                    <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                        <Layers className="w-8" strokeWidth={1.5} />
                        <h2 className="font-pelak-semibold text-2xl">دوره‌های تخصصی قرآن‌آرا</h2>
                    </div>
                    <p className="text-gray-500 font-pelak-medium">آموزش کامل از روخوانی تا تفسیر قرآن</p>
                </div>
                <Button size="lg" rounded="lg" variant="text-primary" className="font-pelak-medium">
                    مشاهده همه دوره‌ها
                    <LongArrowLeft className="w-6" strokeWidth={1.5} />
                </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {data.courses.map((course) => (
                    <Course key={course._id} {...course} />
                ))}
            </div>
        </section>
    );
}

export default Courses;
