import { ThemeProvider } from "next-themes";

import ReactQueryProvider from "./ReactQueryProvider";

function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider attribute="class" disableTransitionOnChange>
            <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
    );
}

export default Providers;
