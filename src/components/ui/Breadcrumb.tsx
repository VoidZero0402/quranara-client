import Link, { LinkProps } from "next/link";

import { cn } from "@/libs/cn";

import ArrowLeft from "../svgs/ArrowLeft";

type BreadcrumbProps = React.ComponentProps<"div">;

type BreadcrumbItemProps = BreadcrumbProps & LinkProps;

function Breadcrumb({ children, className }: BreadcrumbProps) {
    return <div className={cn("flex items-center gap-x-2 p-4 w-full bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-300 rounded-lg", className)}>{children}</div>;
}

Breadcrumb.Item = function ({ children, href, className }: BreadcrumbItemProps) {
    return (
        <Link href={href} className={cn("flex items-center gap-x-1.5", className)}>
            {children}
        </Link>
    );
};

Breadcrumb.Slice = function () {
    return <ArrowLeft className="w-6 text-gray-500 dark:text-gray-400" />;
};

export default Breadcrumb;
