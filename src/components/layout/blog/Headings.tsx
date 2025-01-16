import Link, { LinkProps } from "next/link";

import LinkCircle from "@/components/svgs/LinkCircle";

type HeadingProps = React.ComponentProps<"li"> & LinkProps;

import { type Heading } from "@/types/blog.types";

type HeadingsProps = {
    headings: Heading[];
};

function Headings({ headings }: HeadingsProps) {
    return (
        <div className="space-y-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-2 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                    <LinkCircle className="w-8" />
                    سرفصل‌های مقاله
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">می‌توانید با کلیک روی هر سرفصل به بخش مورد نظر در مقاله بروید</p>
            </div>
            <ul className="space-y-4 font-pelak-medium text-gray-800 dark:text-gray-200">
                {headings.map((heading) => (
                    <Heading key={heading.id} href={`#${heading.id}`}>{heading.text}</Heading>
                ))}
            </ul>
        </div>
    );
}

function Heading({ children, href }: HeadingProps) {
    return (
        <li className="flex items-center gap-x-2">
            <span className="ball"></span>
            <Link href={href} className="hover:text-amber-500 dark:hover:text-amber-400 transition-all">
                {children}
            </Link>
        </li>
    );
}

export default Headings;
