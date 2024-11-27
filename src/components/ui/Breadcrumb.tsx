import Link, { LinkProps } from "next/link";

import { cn } from "@/libs/cn";

import ArrowLeft from "../svgs/ArrowLeft";

type BreadcrumbProps = React.ComponentProps<"div">;

type BreadcrumbItemProps = BreadcrumbProps & LinkProps;

function Breadcrumb({ children, className }: BreadcrumbProps) {
    return <div className={cn("flex items-center gap-x-2 p-6 w-full bg-white dark:bg-gray-850 text-gray-800 dark:text-gray-200 rounded-2xl", className)}>{children}</div>;
}

export function BreadcrumbItem({ children, href, className }: BreadcrumbItemProps) {
    return (
        <Link href={href} className={cn("flex items-center gap-x-1.5 font-pelak-medium hover:text-amber-400 transition-all", className)}>
            {children}
        </Link>
    );
}

export function BreadcrumbSlice() {
    return <ArrowLeft className="w-5 text-gray-600 dark:text-gray-400" />;
}

export default Breadcrumb;
