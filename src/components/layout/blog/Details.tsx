import Link from "next/link";

import Placeholder from "@/components/ui/Placeholder";

import ClockCircle from "@/components/svgs/ClockCircle";
import Folder from "@/components/svgs/Folder";

import { Blog } from "@/types/blog.types";

type DetailsProps = Pick<Blog, "title" | "description" | "category" | "cover" | "timeToRead">;

function Details({ title, description, category, timeToRead }: DetailsProps) {
    return (
        <section className="space-y-12">
            <div className="space-y-4">
                <Placeholder className="aspect-video rounded-xl" type="image" />
                <div className="flex flex-col xs:flex-row items-center gap-4">
                    <Link href={`/blog?category=${category._id}`} className="flex items-center gap-x-2 py-2.5 px-4 font-pelak-medium amber-light rounded-xl">
                        <Folder />
                        {category.title}
                    </Link>
                    <div className="flex items-center gap-x-2 font-pelak-medium text-gray-600 dark:text-gray-400">
                        <ClockCircle />
                        {timeToRead} دقیقه برای مطالعه
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <h1 className="font-pelak-semibold text-2xl text-gray-800 dark:text-gray-200 leading-10">{title}</h1>
                <p className="text-gray-600 dark:text-gray-400 leading-7">{description}</p>
            </div>
        </section>
    );
}

export default Details;
