import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";

import Layers from "@/components/svgs/Layers";
import PlayCircle from "@/components/svgs/PlayCircle";

function Header() {
    return (
        <header>
            <div className="container">
                <section className="flex flex-col-reverse lg:flex-row items-center gap-x-16 gap-y-8 mt-6 sm:mt-2">
                    <div className="lg:w-1/2 flex flex-col gap-y-2">
                        <span className="text-sm font-pelak-medium py-1 px-2.5 rounded-lg bg-gray-100 dark:bg-gray-500/10 text-gray-600 dark:text-gray-200  w-max">به قرآن‌آرا خوش آمدید</span>
                        <h1 className="font-pelak-semibold text-3xl/[1.5] sm:text-4xl/[1.5] text-gray-800 dark:text-gray-200">قرآن‌آرا؛ پلی به سوی یادگیری و درک بهتر قرآن</h1>
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">با قرآن‌آرا، دوره‌های متنوع روخوانی، روان‌خوانی و تفسیر قرآن را به زبانی روان و با کیفیت بالا بیاموزید</p>
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 mt-4">
                            <Button rounded="lg" size="lg" className="font-pelak-medium gap-x-2">
                                <Layers className="w-6" strokeWidth={1.5} />
                                دوره‌های تخصصی قرآن‌آرا
                            </Button>
                            <Button rounded="lg" size="lg" variant="neutral-base" className="font-pelak-medium gap-x-2">
                                <PlayCircle className="w-6" strokeWidth={1.5} />
                                آموزش‌های رایگان قرآن‌آرا
                            </Button>
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
