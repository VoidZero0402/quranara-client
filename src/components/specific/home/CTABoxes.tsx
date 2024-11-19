import CTABox from "./CTABox";

import Layers from "@/components/svgs/Layers";
import Document from "@/components/svgs/Document";
import PlayCircle from "@/components/svgs/PlayCircle";
import MedalRibbon from "@/components/svgs/MedalRibbon";

function CTABoxes() {
    return (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <CTABox href="#courses" title="دوره‌های آموزشی جامع قرآن" description="با دوره‌های متنوع قرآن‌آرا، از روخوانی و روان‌خوانی تا تفسیر آیات را در فضایی ساده و قابل فهم بیاموزید و به عمق معانی کلام خدا پی ببرید">
                <Layers className="w-10" />
            </CTABox>
            <CTABox href="#blog" title="مقالات تخصصی قرآنی" description="بهترین مقالات و تحلیل‌های قرآنی برای درک عمیق‌تر قرآن، از نکات تفسیری گرفته تا آشنایی با مفاهیم ارزشمند، همه در دسترس شماست">
                <Document className="w-10" />
            </CTABox>
            <CTABox href="#tv" title="ویدیوهای آموزشی رایگان" description="به مجموعه‌ای از ویدیوهای رایگان آموزشی دسترسی داشته باشید و قدم‌های اولیه برای یادگیری قرآن و معارف اسلامی را با کیفیت بالا تجربه کنید">
                <PlayCircle className="w-10" />
            </CTABox>
            <CTABox href="#counseling" title="مشاوره در مسیر یادگیری" description="در هر مرحله از یادگیری، مشاوران قرآن‌آرا همراه شما هستند تا بهترین مسیر را برای فهم بهتر آیات الهی انتخاب کنید">
                <MedalRibbon className="w-10" />
            </CTABox>
        </section>
    );
}

export default CTABoxes;
