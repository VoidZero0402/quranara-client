import Assignment from "@/components/specific/management-panel/index/Assignment";

import DoubleCheck from "@/components/svgs/DoubleCheck";
import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import ChatRoundDots from "@/components/svgs/ChatRoundDots";
import QuestionCircle from "@/components/svgs/QuestionCircle";
import Box from "@/components/svgs/Box";

import { ManagementPanelDatas } from "@/types/ui.types";

type AssignmentsProps = Pick<ManagementPanelDatas, "ticketsCount" | "commentsCount" | "questionsCount">;

function Assignments({ ticketsCount, commentsCount, questionsCount }: AssignmentsProps) {
    return (
        <section className="space-y-4 p-4 sm:p-0">
            <div className="space-y-2">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <DoubleCheck className="w-8" />
                    وظایفی که باید انجامشون بدی
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">مدیریت تیکت‌ها، نظرات کاربران، پرسش‌ها و تمارین را در دست بگیر</p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 min-[1480px]:grid-cols-4 gap-4">
                <Assignment title="تیکت‌های پشتیبانی" variant={ticketsCount ? "teal" : "amber"} caption={ticketsCount ? `${ticketsCount} تیکت فعال` : "بدون تیکت فعال"} link={{ text: "مدیریت تیکت‌ها", href: "/management-panel/tickets" }}>
                    <ChatRoundLine />
                </Assignment>
                <Assignment title="نظرات کاربران" variant={commentsCount ? "teal" : "amber"} caption={commentsCount ? `${commentsCount} نظر فعال` : "بدون نظر فعال"} link={{ text: "مدیریت نظرات", href: "/management-panel/comments" }}>
                    <ChatRoundDots />
                </Assignment>
                <Assignment title="پرسش‌های جلسات" variant={questionsCount ? "teal" : "amber"} caption={questionsCount ? `${questionsCount} پرسش فعال` : "بدون پرسش فعال"} link={{ text: "مدیریت پرسش‌ها", href: "/management-panel/questions" }}>
                    <QuestionCircle />
                </Assignment>
                <Assignment title="تمارین جلسات" variant="amber" caption="بدون تمرین فعال" link={{ text: "مدیریت تمارین", href: "/management-panel/exercises" }}>
                    <Box />
                </Assignment>
            </div>
        </section>
    );
}

export default Assignments;
