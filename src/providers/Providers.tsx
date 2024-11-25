import { ThemeProvider } from "next-themes";

import ReactQueryProvider from "./ReactQueryProvider";
import ProgressBarProvider from "./ProgressBarProvider";

function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider attribute="class" disableTransitionOnChange>
            <ReactQueryProvider>
                <ProgressBarProvider>{children}</ProgressBarProvider>
            </ReactQueryProvider>
        </ThemeProvider>
    );
}

export default Providers;
