import Content from "../content/Content";

import Widgets from "@/components/svgs/Widgets";

type TvContentProps = { content: string }

function TvContent({ content }: TvContentProps) {
    return (
        <section className="p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
            <span className="flex items-center gap-x-2 font-pelak-medium text-xl">
                <Widgets className="w-8" />
                توضیحات آموزش
            </span>
            <Content content={content} />
        </section>
    );
}

export default TvContent;
