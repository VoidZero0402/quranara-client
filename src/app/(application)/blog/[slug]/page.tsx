import Header from "@/components/layout/blog/Header";
import Details from "@/components/layout/blog/Details";
import Content from "@/components/layout/blog/Content";
import Author from "@/components/layout/blog/Author";
import Actions from "@/components/layout/blog/Actions";
import Comments from "@/components/layout/shared/Comments";

import Headings from "@/components/specific/blog/Headings";
import RelatedBlogs from "@/components/specific/blog/RelatedBlogs";
import RelatedCourses from "@/components/specific/blog/RelatedCourses";

import Slice from "@/components/ui/Slice";

async function Blog({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <div className="my-8">
            <Header />
            <div className="container">
                <div className="flex gap-8 my-12">
                    <main className="space-y-8 w-[70%]">
                        <section className="space-y-8 p-8 bg-white dark:bg-gray-850 rounded-2xl">
                            <article className="space-y-12">
                                <Details />
                                <Headings />
                                <Content />
                            </article>
                            <Slice />
                            <div className="flex items-center justify-between">
                                <Author />
                                <Actions />
                            </div>
                        </section>
                        <Comments />
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
