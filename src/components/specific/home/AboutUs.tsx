import MapArrowSquare from "@/components/svgs/MapArrowSquare";
import AboutUsBox from "./AboutUsBox";

import Graph from "@/components/svgs/Graph";
import Letter from "@/components/svgs/Letter";
import ChartSquare from "@/components/svgs/ChartSquare";
import BookmarkLine from "@/components/svgs/BookmarkLine";

function AboutUs() {
    return (
        <section className="space-y-8">
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                    <Graph className="w-8" />
                    <h2 className="font-pelak-semibold text-2xl">درباره آکادمی قرآن‌آرا</h2>
                </div>
                <p className="font-pelak-medium text-gray-500">از ایده گرفته تا اهداف و رسالت قرآن‌آرا</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <AboutUsBox title="شروع داستان قرآن‌آرا" description="ایده وبسایت قرآن‌آرا از جایی شروع شد که نیاز به یک پلتفرم مدرن و دسترس‌پذیر برای مطالعه و یادگیری قرآن حس شد. هدف ما این بود که تجربه‌ای متفاوت و کاربردی برای کاربران فراهم کنیم تا بتوانند در هر زمان و مکانی با قرآن کریم در ارتباط باشند و از منابع معتبر بهره‌مند شوند">
                    <MapArrowSquare className="w-8" />
                </AboutUsBox>
                <AboutUsBox title="رسالت ما در قرآن‌آرا" description="قرآن‌آرا با هدف ترویج معارف قرآنی و ایجاد بستری برای انس بیشتر با قرآن راه‌اندازی شده است. رسالت ما این است که افراد را با زیبایی‌ها و عمق مفاهیم قرآن آشنا کنیم و با ارائه ابزارهای پیشرفته، فضای معنوی را در دنیای دیجیتال زنده نگه داریم">
                    <Letter className="w-8" />
                </AboutUsBox>
                <AboutUsBox title="ویژگی‌های منحصر به فرد ما" description="در قرآن‌آرا، ما امکاناتی فراهم کرده‌ایم که تجربه کاربری را بهبود می‌بخشد. از جستجوی پیشرفته آیات و تفسیرها گرفته تا مقالات آموزشی و محتوای چندرسانه‌ای، همه طراحی شده‌اند تا شما به راحتی به منابع قرآنی دسترسی پیدا کنید و از آن‌ها بهره ببرید">
                    <ChartSquare className="w-8" />
                </AboutUsBox>
                <AboutUsBox title="قرآن‌آرا برای شما" description="این وبسایت برای شماست؛ برای کسانی که به دنبال معنا و پیام‌های عمیق قرآن هستند. با امکانات متنوع و محتوای غنی، هدف ما این است که شما بتوانید به ساده‌ترین شکل ممکن از گنجینه قرآن بهره‌مند شوید و سفری متفاوت را در دنیای معارف قرآنی تجربه کنید">
                    <BookmarkLine className="w-8" />
                </AboutUsBox>
            </div>
        </section>
    );
}

export default AboutUs;
