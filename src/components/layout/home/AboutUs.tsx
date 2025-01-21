import AboutUsBox from "@/components/specific/home/AboutUsBox";

import MapArrowSquare from "@/components/svgs/MapArrowSquare";
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
                <AboutUsBox title="شروع داستان قرآن‌آرا" description="قرآن‌آرا زمانی استارت خورد که احساس کردیم برای آموزش‌ تخصصی مهارت‌های قرآنی در محیط آنلاین و دنیای دیجیتال امروز، نیازمند پلتفرمی قدرتمند، خلاق و تعاملی هستیم.">
                    <MapArrowSquare className="w-8" />
                </AboutUsBox>
                <AboutUsBox title="رسالت ما در قرآن‌آرا" description="رسالت ما در قرآن‌آرا، ایجاد بستری ایده‌آل برای یادگیری مهارت‌های قرآنی است. به دنبال این هستیم که مسیر یادگیری قرآن و فنون مرتبط با قرآن رو آسان‌تر و شیرین‌تر کنیم.">
                    <Letter className="w-8" />
                </AboutUsBox>
                <AboutUsBox title="ویژگی‌های منحصر به فرد ما" description="سرفصل‌های جامع و دقیق، سهولت دسترسی به آموزش‌ها، استفاده از مثال‌های متعدد، پرهیز از زیاده‌گویی و اختصار اذیت کننده و کیفیت بالای ضبط، از ویژگی‌ها و اصول کاری ماست.">
                    <ChartSquare className="w-8" />
                </AboutUsBox>
                <AboutUsBox title="قرآن‌آرا برای شما" description="این وب‌سایت متعلق به شماست؛ شما که همیشه در گوشه ذهنت دنبال فرصتی بودی تا زیبا خوندن قرآن رو یاد بگیری، قرآن رو حفظ کنی و از معارف بلند اون استفاده کنی.">
                    <BookmarkLine className="w-8" />
                </AboutUsBox>
            </div>
        </section>
    );
}

export default AboutUs;
