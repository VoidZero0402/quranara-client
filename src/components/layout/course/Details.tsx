import DetailBox from "@/components/specific/course/DetailBox";

import CircleTopDown from "@/components/svgs/CircleTopDown";
import ClockCircle from "@/components/svgs/ClockCircle";
import Graph from "@/components/svgs/Graph";
import MedalRibbon from "@/components/svgs/MedalRibbon";
import Plain from "@/components/svgs/Plain";
import PlayCircle from "@/components/svgs/PlayCircle";
import UserGroup from "@/components/svgs/UserGroup";

import { Course } from "@/types/course.types";

type DetailsProps = Pick<Course, "time" | "metadata" | "updatedAt">;

function Details({ time, metadata, updatedAt }: DetailsProps) {
    return (
        <section className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl" id="details">
            <h3 className="flex items-center gap-x-2 font-pelak-medium text-xl">
                <Plain className="w-8" />
                جزئیات دوره
            </h3>
            <div className="grid grid-cols-3 gap-4">
                <DetailBox text="مدت زمان دوره" caption={`${time[0]} ساعت و ${time[1]} دقیقه`}>
                    <ClockCircle className="w-8" />
                </DetailBox>
                <DetailBox text="تعداد دانشجویان" caption={`${metadata.students} نفر`}>
                    <UserGroup className="w-8" />
                </DetailBox>
                <DetailBox text="روش پشتیبانی" caption={metadata.support}>
                    <MedalRibbon className="w-8" />
                </DetailBox>
                <DetailBox text="پیش نیاز" caption={metadata.preRequisite}>
                    <CircleTopDown className="w-8" />
                </DetailBox>
                <DetailBox text="نحوه ارائه" caption={metadata.present}>
                    <PlayCircle className="w-8" />
                </DetailBox>
                <DetailBox text="آخرین بروزرسانی" caption={new Date(updatedAt).toLocaleString("fa", { dateStyle: "medium", timeStyle: "short" })}>
                    <Graph className="w-8" />
                </DetailBox>
            </div>
        </section>
    );
}

export default Details;
