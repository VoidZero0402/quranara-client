import CreateBlogHeader from "@/components/layout/management-panel/blogs/create/CreateBlogHeader";
import CreateBlogForm from "@/components/form/template/management-panel/CreateBlogForm";

function CreateBlog() {
    return (
        <div className="space-y-4">
            <CreateBlogHeader />
            <div className="py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
                <CreateBlogForm />
            </div>
        </div>
    );
}

export default CreateBlog;
