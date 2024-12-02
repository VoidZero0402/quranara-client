import Link from "next/link";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import Copy from "@/components/svgs/Copy";
import Layers from "@/components/svgs/Layers";
import Plain from "@/components/svgs/Plain";

function Navigation() {
    return (
        <div className="sticky top-4 flex justify-between p-6 bg-white dark:bg-gray-850 font-pelak-medium rounded-2xl shadow-2xl shadow-gray-100 dark:shadow-gray-900 z-20">
            <Link href="#details" className="flex items-center gap-x-2 py-3 px-4 gray-light rounded-2xl">
                <Plain />
                جزئیات دوره
            </Link>
            <Link href="#content" className="flex items-center gap-x-2 py-3 px-4 rounded-2xl">
                <Copy />
                توضیحات دوره
            </Link>
            <Link href="#topics" className="flex items-center gap-x-2 py-3 px-4 rounded-2xl">
                <Layers />
                سرفصل‌های دوره
            </Link>
            <Link href="#comments" className="flex items-center gap-x-2 py-3 px-4 rounded-2xl">
                <ChatRoundLine />
                دیدگاه‌ها و پرسش‌ها
            </Link>
        </div>
    );
}

export default Navigation;
