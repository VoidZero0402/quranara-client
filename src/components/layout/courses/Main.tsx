"use client";

import { Suspense, useState } from "react";

import Details from "@/components/specific/entities/Details";
import Navigation from "@/components/specific/entities/Navigation";
import CoursesGrid, { CoursesGridLoading } from "@/components/specific/courses/CoursesGrid";

function Main() {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <Suspense>
                <Details count={count} text="دوره‌های تخصصی قرآن‌آرا" countText="دوره تخصصی" />
            </Suspense>
            <Suspense>
                <Navigation entity="دوره‌ها" />
            </Suspense>
            <Suspense fallback={<CoursesGridLoading />}>
                <CoursesGrid updateCount={setCount} />
            </Suspense>
        </>
    );
}

export default Main;
