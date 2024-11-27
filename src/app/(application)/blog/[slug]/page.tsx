import Header from "@/components/layout/blog/Header";

import RelatedBlogs from "@/components/specific/blog/RelatedBlogs";
import RelatedCourses from "@/components/specific/blog/RelatedCourses";

import Placeholder from "@/components/ui/Placeholder";

async function Blog({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <div className="my-8">
            <Header />
            <div className="container">
                <div className="flex gap-8 my-12">
                    <main className="w-[70%]">
                        <div className="p-8 bg-white dark:bg-gray-850 rounded-2xl">
                            <div className="space-y-4">
                                <Placeholder className="aspect-video rounded-xl" type="image" />
                                <div className="states"></div>
                                <div className="texts"></div>
                                <div className="headings"></div>
                            </div>
                            <div className="content"></div>
                        </div>
                    </main>
                    <aside className="w-[30%] space-y-8">
                        <RelatedBlogs slug={slug} />
                        <RelatedCourses />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Blog;
