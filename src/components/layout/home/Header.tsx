import Link from "next/link";

import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";

import Layers from "@/components/svgs/Layers";
import PlayCircle from "@/components/svgs/PlayCircle";

function Header() {
    return (
        <header>
            <div className="container">
                <section className="flex flex-col-reverse lg:flex-row items-center gap-x-16 gap-y-8">
                    <div className="flex flex-col gap-y-2 lg:w-1/2">
                        <span className="font-pelak-medium text-sm py-1 px-2.5 rounded-lg gray-light w-max">به قرآن‌آرا خوش آمدید</span>
                        <h1 className="font-pelak-semibold text-3xl/[1.5] sm:text-4xl/[1.5] text-gray-800 dark:text-gray-200">قرآن‌آرا؛ مرجع تخصصی مهارت‌ها و علوم قرآنی</h1>
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-8 sm:leading-8">با قرآن‌آرا، مهارت‌های متنوع قرآنی از جمله روخوانی و روان‌خوانی، تجوید، ترتیل و حفظ قرآن رو با کیفیت بالا بیاموزید</p>
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 mt-4">
                            <Link href="/courses" className="flex">
                                <Button size="lg" className="gap-x-2 w-full">
                                    <Layers />
                                    دوره‌های تخصصی قرآن‌آرا
                                </Button>
                            </Link>
                            <Link href="/tv" className="flex">
                                <Button size="lg" variant="neutral-base" className="gap-x-2 w-full">
                                    <PlayCircle />
                                    ویدیوهای آموزشی قرآن‌آرا
                                </Button>
                            </Link>
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
