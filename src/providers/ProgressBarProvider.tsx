"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function ProgressBarProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <ProgressBar color="#fbbf24" options={{ showSpinner: false }} shallowRouting />
        </>
    );
}

export default ProgressBarProvider;
