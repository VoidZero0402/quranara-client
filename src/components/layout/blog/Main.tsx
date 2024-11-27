"use client";

import { Suspense, useState } from "react";

import Details from "@/components/specific/entities/Details";
import Navigation from "@/components/specific/entities/Navigation";
import Categories, { CategoriesLoading } from "@/components/specific/blog/Categories";
import BlogGrid, { BlogGridLoading } from "@/components/specific/blog/BlogGrid";

function Main() {
    const [count, setCount] = useState(0);

    return (
        <div className="space-y-4 md:space-y-8">
            <div className="space-y-8">
                <Details count={count} text="همه مقالات قرآن‌آرا" countText="مقاله" />
                <Navigation entity="مقالات" />
            </div>
            <div className="flex flex-col gap-y-8">
                <Suspense fallback={<CategoriesLoading />}>
                    <Categories />
                </Suspense>
                <Suspense fallback={<BlogGridLoading />}>
                    <BlogGrid updateCount={setCount} />
                </Suspense>
            </div>
        </div>
    );
}

export default Main;
