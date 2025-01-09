import Statistic from "@/components/specific/management-panel/index/Statistic";

import Transform from "@/components/svgs/Transform";
import UserGroup from "@/components/svgs/UserGroup";
import Layers from "@/components/svgs/Layers";
import Widgets from "@/components/svgs/Widgets";
import PlayCircle from "@/components/svgs/PlayCircle";

import { ManagementPanelDatas } from "@/types/ui.types";

type StatisticsProps = Pick<ManagementPanelDatas, "usersCount" | "coursesCount" | "blogsCount" | "tvsCount">;

function Statistics({ usersCount, coursesCount, blogsCount, tvsCount }: StatisticsProps) {
    return (
        <section className="space-y-4 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Transform className="w-8" />
                    آمار و ارقام لحظه‌ای قرآن‌آرا
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">آخرین ارقام و آمار قرآن‌آرا با یک نگاه به صورت لحظه‌ای ببینید</p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-4">
                <Statistic title="کاربران فعال قرآن‌آرا" caption={`${usersCount} کاربر فعال`} link={{ text: "مدیریت کاربران", href: "/management-panel/users" }}>
                    <UserGroup />
                </Statistic>
                <Statistic title="دوره‌های تخصصی قرآن‌آرا" caption={`${coursesCount} دوره تخصصی`} link={{ text: "مدیریت دوره‌ها", href: "/management-panel/courses" }}>
                    <Layers />
                </Statistic>
                <Statistic title="مقالات تخصصی قرآن‌آرا" caption={`${blogsCount} مقاله تخصصی`} link={{ text: "مدیریت مقالات", href: "/management-panel/blogs" }}>
                    <Widgets />
                </Statistic>
                <Statistic title="آموزش‌های ویدیویی قرآن‌آرا" caption={`${tvsCount} آموزش ویدیویی`} link={{ text: "مدیریت آموزش‌ها", href: "/management-panel/tvs" }}>
                    <PlayCircle />
                </Statistic>
            </div>
        </section>
    );
}

export default Statistics;
