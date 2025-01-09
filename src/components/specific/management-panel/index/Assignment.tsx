import Link from "next/link";

import LongArrowLeft from "@/components/svgs/LongArrowLeft";

const varients = {
    teal: {
        background: "bg-teal-500",
        text: "text-teal-500",
    },
    amber: {
        background: "bg-amber-400",
        text: "text-amber-400",
    },
};

type AssignmentProps = {
    title: string;
    caption: string;
    link: {
        text: string;
        href: string;
    };
    variant: keyof typeof varients;
} & React.ComponentProps<"div">;

function Assignment({ children, title, caption, link, variant }: AssignmentProps) {
    const { background, text } = varients[variant];

    return (
        <div className="space-y-6 p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <span className="flex items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200">
                {children}
                {title}
            </span>
            <div className="flex justify-between">
                <div className="flex items-center gap-x-2 w-max">
                    <div className={`size-1.5 rounded-full ${background}`}>
                        <div className="size-full bg-inherit rounded-full animate-ping"></div>
                    </div>
                    <span className={`font-pelak-medium text-sm ${text}`}>{caption}</span>
                </div>
                <Link href={link.href} className="flex items-center gap-x-1 font-pelak-medium text-sm text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-amber-400 transition-colors">
                    {link.text}
                    <LongArrowLeft className="w-5" />
                </Link>
            </div>
        </div>
    );
}

export default Assignment;
