"use client";

import ErrorHeader from "@/components/layout/error-pages/ErrorHeader";
import Interactions from "@/components/layout/error-pages/Interactions";

function Error({ reset }: { reset: () => void }) {
    return (
        <>
            <main className="my-10 sm:my-20">
                <div className="container space-y-8">
                    <ErrorHeader reset={reset} />
                    <Interactions />
                </div>
            </main>
        </>
    );
}

export default Error;
