import CTABox from "@/components/specific/home/CTABox";

import Layers from "@/components/svgs/Layers";
import Widgets from "@/components/svgs/Widgets";
import PlayCircle from "@/components/svgs/PlayCircle";
import MedalRibbon from "@/components/svgs/MedalRibbon";

function CTABoxes() {
    return (
        <section className="grid lg:grid-cols-2 gap-8">
            <CTABox href="#courses" title="دوره‌های تخصصی قرآن‌آرا" description="با دوره‌های تخصصی قرآن‌آرا با سرعت بالا و نهایت دقت، به اوج برسید. دنیایی از فنون و تخصص‌های قرآنی در انتظار شماست.">
                <Layers className="w-10" />
            </CTABox>
            <CTABox href="#blog" title="مقالات تخصصی قرآنی" description="مقالات قرآن‌آرا کاوشی است در دنیای علوم و مهارت‌های قرآنی که می‌تونه افق‌های جدیدی رو به روی شما باز کنه.">
                <Widgets className="w-10" />
            </CTABox>
            <CTABox href="#tv" title="ویدیوهای آموزشی" description="ویدیوهای آموزشی قرآن‌آرا به صورت کاملا رایگان به شما کمک می‌کنه مهارت‌های قرآنی خودتون رو ارتقا بدید و پیشرفت کنید.">
                <PlayCircle className="w-10" />
            </CTABox>
            <CTABox href="#counseling" title="مشاوره هدفمند" description="بخش مشاوره قرآن‌آرا به شما کمک می‌کنه تا با راهنمایی‌های تخصصی و شخصی‌سازی‌شده، در مسیر آموزش قرآن پیش بروید.">
                <MedalRibbon className="w-10" />
            </CTABox>
        </section>
    );
}

export default CTABoxes;
