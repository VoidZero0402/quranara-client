import Calendar from "@/components/svgs/Calendar";
import ClockCircle from "@/components/svgs/ClockCircle";
import Document from "@/components/svgs/Document";
import Folder from "@/components/svgs/Folder";
import Heart from "@/components/svgs/Heart";
import Placeholder from "@/components/ui/Placeholder";
import Link from "next/link";

function Details() {
    return (
        <section className="space-y-12">
            <div className="space-y-4">
                <Placeholder className="aspect-video rounded-xl" type="image" />
                <div className="flex gap-x-4">
                    <Link href="" className="flex items-center gap-x-2 py-2.5 px-4 font-pelak-medium amber-light rounded-xl">
                        <Folder />
                        دسته آموزش قرآن
                    </Link>
                    <div className="flex items-center gap-x-2 font-pelak-medium text-gray-600 dark:text-gray-400">
                        <ClockCircle />۵ دقیقه برای مطالعه
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <h1 className="font-pelak-semibold text-2xl text-gray-800 dark:text-gray-200 leading-10">نقش تاریخ اسلام در فرهنگ مسلمانان</h1>
                <p className="text-gray-600 dark:text-gray-400 leading-7">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </div>
        </section>
    );
}

export default Details;
