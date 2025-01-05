import Link, { LinkProps } from "next/link";

import InfoCircle from "@/components/svgs/InfoCircle";
import Layers from "@/components/svgs/Layers";
import Widgets from "@/components/svgs/Widgets";
import PlayCircle from "@/components/svgs/PlayCircle";

type InteractionProps = {
    title: string;
    description: string;
} & LinkProps &
    React.ComponentProps<"a">;

function Interactions() {
    return (
        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <Interaction href="/courses" title="دوره‌های تخصصی" description="دوره‌های تخصصی قرآن‌آرا، آموزش کامل از روخوانی تا تفسیر قرآن">
                <Layers />
            </Interaction>
            <Interaction href="/blog" title="مقالات تخصصی قرآن‌آرا" description="مقالات تخصصی قرآن‌آرا، مطالب ارزشمند و عمقی درباره قرآن و مفاهیم آن">
                <Widgets />
            </Interaction>
            <Interaction href="/tv" title="ویدیوهای آموزشی" description="ویدیوهای آموزشی، ویدیوهای کاربردی برای آشنایی با قرآن">
                <PlayCircle />
            </Interaction>
            <Interaction href="/about-us" title="درباره قرآن‌آرا" description="ما در قرآن‌آرا به شما کمک می‌کنیم تا به ساده‌ترین و موثرترین روش قرآن را یاد بگیرید.">
                <InfoCircle />
            </Interaction>
        </section>
    );
}

function Interaction({ children, href, title, description }: InteractionProps) {
    return (
        <Link href={href} className="space-y-2 p-4 bg-white dark:bg-gray-850 rounded-xl">
            <span className="flex items-center gap-x-1 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                {children}
                {title}
            </span>
            <p className="text-gray-600 dark:text-gray-400 leading-7 line-clamp-2">{description}</p>
        </Link>
    );
}

export default Interactions;
