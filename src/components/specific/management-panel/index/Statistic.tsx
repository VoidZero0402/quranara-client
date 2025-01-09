import Link from "next/link";

import LongArrowLeft from "@/components/svgs/LongArrowLeft";

type StatisticProps = {
    title: string;
    caption: string;
    link: {
        text: string;
        href: string;
    };
} & React.ComponentProps<"div">;

function Statistic({ children, title, caption, link }: StatisticProps) {
    return (
        <div className="space-y-6 p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <span className="flex items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200">
                {children}
                {title}
            </span>
            <div className="flex justify-between">
                <div className="flex items-center gap-x-2 w-max">
                    <div className="size-1.5 rounded-full bg-amber-400">
                        <div className="size-full bg-inherit rounded-full animate-ping"></div>
                    </div>
                    <span className="font-pelak-medium text-sm text-amber-400">{caption}</span>
                </div>
                <Link href={link.href} className="flex items-center gap-x-1 font-pelak-medium text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-amber-400 transition-colors">
                    {link.text}
                    <LongArrowLeft className="w-5" />
                </Link>
            </div>
        </div>
    );
}

export default Statistic;
