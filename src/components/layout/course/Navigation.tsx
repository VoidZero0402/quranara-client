import Link from "next/link";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import Widgets from "@/components/svgs/Widgets";
import Layers from "@/components/svgs/Layers";
import Plain from "@/components/svgs/Plain";

type NavigationProps = { section: string };

function Navigation({ section }: NavigationProps) {
    return (
        <div className="hidden md:flex sticky top-4 flex-wrap justify-between gap-y-4 p-4 bg-white dark:bg-gray-850 font-pelak-medium rounded-2xl shadow-2xl shadow-gray-100 dark:shadow-gray-900/50 z-20">
            <Link href="#details" className={`flex items-center gap-x-2 shrink-0 py-3 px-4 rounded-xl transition-all duration-300 ${section === "details" ? "gray-light" : ""}`}>
                <Plain />
                جزئیات دوره
            </Link>
            <Link href="#content" className={`flex items-center gap-x-2 shrink-0 py-3 px-4 rounded-xl transition-all duration-300 ${section === "content" ? "gray-light" : ""}`}>
                <Widgets />
                توضیحات دوره
            </Link>
            <Link href="#topics" className={`flex items-center gap-x-2 shrink-0 py-3 px-4 rounded-xl transition-all duration-300 ${section === "topics" ? "gray-light" : ""}`}>
                <Layers />
                سرفصل‌های دوره
            </Link>
            <Link href="#comments" className={`flex items-center gap-x-2 shrink-0 py-3 px-4 rounded-xl transition-all duration-300 ${section === "comments" ? "gray-light" : ""}`}>
                <ChatRoundLine />
                دیدگاه‌ها و پرسش‌ها
            </Link>
        </div>
    );
}

export default Navigation;
