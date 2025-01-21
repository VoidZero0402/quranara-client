import CTABox from "@/components/specific/about-us/CTABox";

import Layers from "@/components/svgs/Layers";
import Widgets from "@/components/svgs/Widgets";
import PlayCircle from "@/components/svgs/PlayCircle";
import MedalRibbon from "@/components/svgs/MedalRibbon";

function CTA() {
    return (
        <section className="space-y-8">
            <h2 className="text-center font-pelak-semibold text-xl sm:text-2xl">آنچه در قرآن‌آرا خواهید دید</h2>
            <div className="grid sm:grid-cols-2 gap-8">
                <CTABox href="/courses" title="دوره‌های تخصصی" description="با دوره‌های تخصصی قرآن‌آرا با سرعت بالا و نهایت دقت، به اوج برسید. دنیایی از فنون و تخصص‌ های قرآنی در انتظار شماست">
                    <Layers />
                </CTABox>
                <CTABox href="/blog" title="مقالات تخصصی قرآنی" description="مقالات قرآن‌آرا کاوشی است در دنیای علوم و مهارت‌های قرآنی که می‌تونه افق‌های جدیدی رو به روی شما باز کنه">
                    <Widgets />
                </CTABox>
                <CTABox href="/tv" title="ویدیوهای آموزشی" description="ویدیوهای آموزشی قرآن‌آرا به صورت کاملا رایگان به شما کمک می‌کنه مهارت‌های قرآنی خودتون رو ارتقا بدید و پیشرفت کنید">
                    <PlayCircle />
                </CTABox>
                <CTABox href="/" title="مشاوره هدفمند" description="بخش مشاوره قرآن‌آرا به شما کمک می‌کنه تا با راهنمایی‌های تخصصی و شخصی‌سازی ‌شده، در مسیر آموزش قرآن پیش بروید">
                    <MedalRibbon />
                </CTABox>
            </div>
        </section>
    );
}

export default CTA;
