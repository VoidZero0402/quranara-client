import Image from "@/components/ui/Image";

import DoubleCheck from "@/components/svgs/DoubleCheck";

function Founder() {
    return (
        <section id="founder" className="space-y-8 sm:p-8 sm:bg-white sm:dark:bg-gray-850 text-gray-800 dark:text-gray-200 sm:rounded-2xl">
            <h2 className="text-center font-pelak-semibold text-xl sm:text-2xl">مؤسس قرآن‌آرا کیست؟</h2>
            <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-8">وقتشه که کمی درباره خودم بگم تا بیشتر با هم آشنا بشیم. من آموزش قرآن رو به صورت حرفه‌ای از 8 سالگی آغاز کردم و به مدت 3 سال مشغول یادگیری روخوانی و روانخوانی قرآن کریم و تجوید و ترتیل بودم. در 11 سالگی وارد دنیای حفظ قرآن شدم و پس از 7 سال موفق به حفظ کل قرآن کریم شدم. همین که حفظم تمام شد، وارد مسابقات قرآن شدم و 10 ساله که به صورت جدی در مسابقات قرآنی شرکت می‌کنم؛ مهم‌ترین رتبه‌هایی که در این چند سال به لطف الهی در رشته حفظ کل قرآن کریم کسب کردم، این‌هاست:</p>
                <div className="flex flex-col-reverse xl:flex-row gap-8">
                    <div className="space-y-4 w-full xl:w-1/2 font-pelak-medium text-teal-500 leading-8">
                        <div className="flex items-center gap-x-2">
                            <div className="flex-center shrink-0 size-8 teal-light rounded-full">
                                <DoubleCheck />
                            </div>
                            رتبه دوم مسابقات بین المللی روسیه در سال 1402
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div className="flex-center shrink-0 size-8 teal-light rounded-full">
                                <DoubleCheck />
                            </div>
                            رتبه اول مسابقات بین المللی طلاب جهان اسلام در سال 1396
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div className="flex-center shrink-0 size-8 teal-light rounded-full">
                                <DoubleCheck />
                            </div>
                            رتبه دوم مسابقات سراسری اوقاف در سال 1400
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div className="flex-center shrink-0 size-8 teal-light rounded-full">
                                <DoubleCheck />
                            </div>
                            رتبه پنجم مسابقات سراسری اوقاف در سال‌های 1398 ـ 1401 ـ 1402
                        </div>
                        <p className="font-pelak text-gray-600 dark:text-gray-400 leading-8">در سه سال اخیر من تونستم با ده‌ها حافظ بین المللی از کشورهای مختلف صحبت کنم و از تجربیات اون‌ها در زمینه حفظ قرآن استفاده کنم. علاوه بر اون توفیق داشتم به صدها حافظ قرآن مشاوره بدم و در رفع مشکلات حفظی‌شون مؤثر باشم.</p>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <div className="aspect-video">
                            <Image src="https://dl.quranara.com/static/founder.jpg" alt="founder" width={720} height={480} wrapperClassName="rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Founder;
