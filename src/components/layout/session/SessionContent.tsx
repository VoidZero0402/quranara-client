import Widgets from "@/components/svgs/Widgets";

import Content from "../content/Content";

type SessionContentProps = { content: string };

function SessionContent({ content }: SessionContentProps) {
    return (
        <section className="space-y-4 p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <span className="flex items-center gap-x-2 font-pelak-medium text-xl">
                <Widgets className="w-8" />
                توضیحات جلسه
            </span>
            <Content content={content} />
        </section>
    );
}

export default SessionContent;
