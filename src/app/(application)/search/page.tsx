import { Suspense } from "react";
import type { Metadata } from "next";

import Header from "@/components/layout/search/Header";
import Courses, { CoursesLoading } from "@/components/layout/search/Courses";
import Tvs, { TvsLoading } from "@/components/layout/search/Tvs";
import Blogs, { BlogsLoading } from "@/components/layout/search/Blogs";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ q: string }> }): Promise<Metadata> {
    const query = (await searchParams).q;

    return {
        title: `جستجو ${query} در قرآن‌آرا`,
        description: `تمامی نتایج برای جستجو "${query}" در قرآن‌آرا`,
    };
}

async function Search({ searchParams }: { searchParams: Promise<{ q: string }> }) {
    const query = (await searchParams).q;

    return (
        <main className="my-20">
            <div className="container space-y-8">
                <Header query={query} />
                <div className="space-y-32">
                    <Suspense fallback={<CoursesLoading query={query} />}>
                        <Courses query={query} />
                    </Suspense>
                    <Suspense fallback={<TvsLoading query={query} />}>
                        <Tvs query={query} />
                    </Suspense>
                    <Suspense fallback={<BlogsLoading query={query} />}>
                        <Blogs query={query} />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}

export default Search;
