import Widgets from "@/components/svgs/Widgets";

import Content from "../content/Content";

function SessionContent() {
    return (
        <section className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <span className="flex items-center gap-x-2 font-pelak-medium text-xl">
                <Widgets className="w-8" />
                توضیحات جلسه
            </span>
            <Content />
        </section>
    );
}

export default SessionContent;
