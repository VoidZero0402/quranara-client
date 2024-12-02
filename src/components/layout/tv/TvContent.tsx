import Content from "../content/Content";

import Widgets from "@/components/svgs/Widgets";

function TvContent() {
    return (
        <section className="flex flex-col gap-y-8 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
            <span className="flex items-center gap-x-2 font-pelak-medium text-xl">
                <Widgets className="w-8" />
                توضیحات آموزش
            </span>
            <Content />
        </section>
    );
}

export default TvContent;
