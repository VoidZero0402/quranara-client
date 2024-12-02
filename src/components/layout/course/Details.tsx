import DetailBox from "@/components/specific/course/DetailBox";
import CircleTopDown from "@/components/svgs/CircleTopDown";
import ClockCircle from "@/components/svgs/ClockCircle";
import Graph from "@/components/svgs/Graph";
import MapArrowSquare from "@/components/svgs/MapArrowSquare";
import MedalRibbon from "@/components/svgs/MedalRibbon";
import Plain from "@/components/svgs/Plain";
import PlayCircle from "@/components/svgs/PlayCircle";
import UserGroup from "@/components/svgs/UserGroup";

function Details() {
    return (
        <section className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl" id="details">
            <h3 className="flex items-center gap-x-2 font-pelak-medium text-2xl">
                <Plain className="w-8" />
                جزئیات دوره
            </h3>
            <div className="grid grid-cols-3 gap-4">
                <DetailBox text="مدت زمان دوره" caption="۵ ساعت و ۲۳ دقیقه">
                    <ClockCircle className="w-8" />
                </DetailBox>
                <DetailBox text="تعداد دانشجویان" caption="۱۲۳ نفر">
                    <UserGroup className="w-8" />
                </DetailBox>
                <DetailBox text="روش پشتیبانی" caption="پشتیبانی آنلاین">
                    <MedalRibbon className="w-8" />
                </DetailBox>
                <DetailBox text="پیش نیاز" caption="بدون پیش نیاز">
                    <CircleTopDown className="w-8" />
                </DetailBox>
                <DetailBox text="نحوه ارائه" caption="به صورت آنلاین">
                    <PlayCircle className="w-8" />
                </DetailBox>
                <DetailBox text="آخرین بروزرسانی" caption={new Date().toLocaleString("fa", { dateStyle: "medium", timeStyle: "short" })}>
                    <Graph className="w-8" />
                </DetailBox>
            </div>
        </section>
    );
}

export default Details;
