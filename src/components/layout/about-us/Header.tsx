import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";

import PlayCircle from "@/components/svgs/PlayCircle";

function Header() {
    return (
        <header>
            <div className="container">
                <section className="flex flex-col-reverse lg:flex-row items-center gap-x-16 gap-y-8">
                    <div className="flex flex-col gap-y-2 lg:w-1/2">
                        <span className="font-pelak-medium text-teal-500">داستان قرآن‌آرا را بخوانید</span>
                        <h1 className="font-pelak-semibold text-3xl/[1.5] sm:text-4xl/[1.5] text-gray-800 dark:text-gray-200">درباره آکادمی قرآن‌آرا</h1>
                        <p className="sm:text-lg text-gray-600 dark:text-gray-400 leading-8 sm:leading-8">از ایده ساخت قرآن‌آرا گرفته تا هدف اصلی آن در ترویج مهارت‌های قرآنی، در این صفحه با داستان شکل‌گیری، تجربه‌های مؤسس، خدمات آموزشی، مشاوره تخصصی، و دستاوردهای مهم این آکادمی آشنا می‌شوید.</p>
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 mt-4">
                            <a href="#story">
                                <Button size="lg" className="w-full">
                                    داستان قرآن‌آرا را بخوانید
                                </Button>
                            </a>
                            <a href="#introduction">
                                <Button size="lg" variant="neutral-base" className="gap-x-2 w-full">
                                    <PlayCircle />
                                    مشاهده ویدیو معرفی
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 order-2">
                        <Placeholder className="aspect-video" type="image" />
                    </div>
                </section>
            </div>
        </header>
    );
}

export default Header;
