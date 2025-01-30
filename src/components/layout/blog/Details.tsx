import Link from "next/link";

import Image from "@/components/ui/Image";

import LinkCircle from "@/components/svgs/LinkCircle";

import { Blog } from "@/types/blog.types";

type DetailsProps = Pick<Blog, "title" | "description" | "category" | "cover" | "timeToRead">;

function Details({ title, description, category, cover, timeToRead }: DetailsProps) {
    return (
        <section className="space-y-12">
            <div className="space-y-4">
                <div className="aspect-video">
                    <Image src={cover} alt={title} width={1600} height={900} wrapperClassName="rounded-xl" />
                </div>
                <div className="flex items-center justify-between">
                    <Link href={`/blog?category=${category._id}`} className="flex items-center gap-x-2 font-pelak-medium text-gray-800 dark:text-gray-200">
                        <LinkCircle />
                        {category.title}
                    </Link>
                    <span className="font-pelak-medium text-sm text-teal-500">{timeToRead} دقیقه برای مطالعه</span>
                </div>
            </div>
            <div className="space-y-2">
                <h1 className="font-pelak-semibold text-2xl text-gray-800 dark:text-gray-200 leading-10">{title}</h1>
                <p className="text-gray-700 dark:text-gray-300 leading-8">{description}</p>
            </div>
        </section>
    );
}

export default Details;
