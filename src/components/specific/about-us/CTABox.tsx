import Link, { LinkProps } from "next/link";

import LongArrowLeft from "@/components/svgs/LongArrowLeft";

type CTABoxProps = {
    title: string;
    description: string;
} & LinkProps &
    React.ComponentProps<"div">;

function CTABox({ children, title, description, href }: CTABoxProps) {
    return (
        <div className="space-y-4 p-6 bg-white dark:bg-gray-850 text-gray-800 dark:text-gray-200 rounded-2xl">
            <div className="space-y-2">
                <div className="flex items-center gap-x-1 font-pelak-medium">
                    {children}
                    {title}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-8 md:line-clamp-3">{description}</p>
            </div>
            <Link href={href} className="flex items-center gap-x-1 font-pelak-medium text-sm hover:text-blue-500 dark:hover:text-amber-400 transition-all">
                مشاهده بیشتر
                <LongArrowLeft className="w-5" />
            </Link>
        </div>
    );
}

export default CTABox;
