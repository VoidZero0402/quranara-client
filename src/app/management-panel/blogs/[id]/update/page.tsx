import { notFound } from "next/navigation";

import { getRawBlog } from "@/api/queries/blog";

import UpdateBlogHeader from "@/components/layout/management-panel/blogs/update/UpdateBlogHeader";
import UpdateBlogForm from "@/components/form/template/management-panel/UpdateBlogForm";

async function UpdateBlog({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const {
        data: { blog },
        status,
    } = await getRawBlog({ blogId: id });

    if (status === 404) {
        notFound();
    }

    return (
        <div className="space-y-4">
            <UpdateBlogHeader />
            <div className="py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
                <UpdateBlogForm blog={blog} />
            </div>
        </div>
    );
}

export default UpdateBlog;
