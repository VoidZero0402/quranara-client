import CreateCourseHeader from "@/components/layout/management-panel/courses/create/CreateCourseHeader";
import CreateCourseForm from "@/components/form/template/management-panel/CreateCourseForm";

function CreateCourse() {
    return (
        <div className="space-y-4">
            <CreateCourseHeader />
            <div className="py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
                <CreateCourseForm />
            </div>
        </div>
    );
}

export default CreateCourse;
