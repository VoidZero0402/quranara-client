import LinkRoundAngle from "@/components/svgs/LinkRoundAngle";
import RelatedCourse from "./RelatedCourse";

function RelatedCourses() {
    return (
        <div className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-2 font-pelak-medium">
                    <LinkRoundAngle />
                    دوره‌های مرتبط
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">دوره‌هایی که ممکن است به آن علاقه‌مند باشید</p>
            </div>
            <div className="space-y-4">
                <RelatedCourse />
                <RelatedCourse />
            </div>
        </div>
    );
}

export default RelatedCourses;
