import CTABox from "@/components/specific/about-us/CTABox";

import Layers from "@/components/svgs/Layers";
import Widgets from "@/components/svgs/Widgets";
import PlayCircle from "@/components/svgs/PlayCircle";
import DoubleCheck from "@/components/svgs/DoubleCheck";

function CTA() {
    return (
        <section className="space-y-8">
            <h2 className="text-center font-pelak-semibold text-xl sm:text-2xl">آنچه در قرآن‌آرا خواهید دید</h2>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <CTABox href="/courses" title="دوره‌های تخصصی" description="با دوره‌های متنوع قرآن‌آرا، در فضایی ساده و قابل فهم بیاموزید و به عمق معانی کلام خدا پی ببرید">
                    <Layers />
                </CTABox>
                <CTABox href="/blog" title="مقالات تخصصی قرآنی" description="بهترین مقالات و تحلیل‌های قرآنی برای درک عمیق‌تر قرآن، از نکات تفسیری گرفته تا آشنایی با مفاهیم ارزشمند، همه در دسترس شماست">
                    <Widgets />
                </CTABox>
                <CTABox href="/tv" title="ویدیوهای آموزشی رایگان" description="به مجموعه‌ای از ویدیوهای رایگان آموزشی دسترسی داشته باشید و قدم‌های اولیه برای یادگیری قرآن و معارف اسلامی را با کیفیت بالا تجربه کنید">
                    <PlayCircle />
                </CTABox>
                <CTABox href="/tv" title="محتوای باکیفیت و بروز" description="با محتوای باکیفیت و بروز، به آموزش قرآنی با کیفیت بالا دسترسی داشته باشید و بهترین مسیر را انتخاب کنید">
                    <DoubleCheck />
                </CTABox>
            </div>
        </section>
    );
}

export default CTA;
