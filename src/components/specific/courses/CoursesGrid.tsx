import { CourseLoading } from "@/components/card/Course";

function CoursesGrid() {
    return (
        <section>
            <div></div>
            <div className="grid grid-cols-4 gap-8">
                <CourseLoading />
                <CourseLoading />
                <CourseLoading />
                <CourseLoading />
            </div>
        </section>
    );
}

export default CoursesGrid;
