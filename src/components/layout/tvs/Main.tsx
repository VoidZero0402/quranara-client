"use client";

import { Suspense, useState } from "react";

import { REFERENCES } from "@/constants/categories";

import Details from "@/components/specific/entities/Details";
import Navigation from "@/components/specific/entities/Navigation";
import Categories, { CategoriesLoading } from "@/components/specific/entities/Categories";
import TvGrid, { TvGridLoading } from "@/components/specific/tvs/TvGrid";

function Main() {
    const [count, setCount] = useState(0);

    return (
        <div className="space-y-4 md:space-y-8">
            <div className="space-y-8">
                <Suspense>
                    <Details count={count} text="همه آموزش‌های قرآن‌آرا" countText="عنوان آموزشی" />
                </Suspense>
                <Suspense>
                    <Navigation entity="آموزش‌ها" />
                </Suspense>
            </div>
            <div className="flex flex-col gap-y-8">
                <Suspense fallback={<CategoriesLoading />}>
                    <Categories reference={REFERENCES.TV} />
                </Suspense>
                <Suspense fallback={<TvGridLoading />}>
                    <TvGrid updateCount={setCount} />
                </Suspense>
            </div>
        </div>
    );
}

export default Main;
