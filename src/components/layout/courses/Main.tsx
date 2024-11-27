"use client";

import { Suspense, useState } from "react";

import Details from "@/components/specific/courses/Details";
import Navigation from "@/components/specific/courses/Navigation";
import CoursesGrid, { CoursesGridLoading } from "@/components/specific/courses/CoursesGrid";

function Main() {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <Details count={count} />
            <Navigation />
            <Suspense fallback={<CoursesGridLoading />}>
                <CoursesGrid updateCount={setCount} />
            </Suspense>
        </>
    );
}

export default Main;
