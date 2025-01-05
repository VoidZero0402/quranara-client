import Link from "next/link";

function Main() {
    return (
        <section className="space-y-8 p-4 sm:p-8 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="space-y-2">
                <h2 className="font-pelak-semibold text-xl sm:text-2xl text-gray-800 dark:text-gray-200">قوانین و مقررات وبسایت</h2>
                <p className="text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8 leading-8">تمامی فعالیت‌‌های سایت بر پایه قوانین جمهوری اسلامی ایران و قوانین تجارت الکترونیک است.</p>
            </div>
            <div className="space-y-2">
                <h2 className="font-pelak-semibold text-xl sm:text-2xl text-gray-800 dark:text-gray-200">حقوق مالکیت معنوی</h2>
                <p className="text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8 leading-8">
                    حق امتیاز کلیه محصولات و دوره‌های آموزشی وب سایت برای شخص{" "}
                    <Link href="/about-us" className="font-normal font-pelak-semibold text-gray-800 dark:text-gray-200 underline">
                        حسین خانی بیدگلی
                    </Link>{" "}
                    محفوظ است و هرگونه کپی‌ برداری یا فروش محصولات و دوره‌های آموزشی وب سایت، غیرمجاز بوده و پیگرد قانونی دارد. کاربر متعهد می‌شود که دوره خریداری شده توسط خود را برای اهداف مختلف به فروش نگذارد.
                </p>
                <p className="text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8 leading-8">تنها خریدار دوره‌های آموزشی می‌تواند از آن استفاده کند و حق تکثیر یا فروش آن را به شخص دیگری ندارد. کاربر متعهد می‌شود که دوره خریداری شده توسط خودش را با دیگران به اشتراک نگذارد. </p>
            </div>
            <div className="space-y-2">
                <h2 className="font-pelak-semibold text-xl sm:text-2xl text-gray-800 dark:text-gray-200">نظارت بر محتوا</h2>
                <p className="text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8 leading-8">قرآن‌آرا حق دارد به صلاحدید خود، نوشته‌ها و محتوایی که کاربران و تولیدکنندگان روی وبسایت قرار می‌دهند اما با قوانین سایت مغایرت دارند، ویرایش یا حذف کند و یا از انتشار آن‌ها جلوگیری نماید. هدف ما در قرآن‌آرا این است که محیطی سالم و عاری از هرگونه توهین برای تولید و انتشار محتوا فراهم کنیم.</p>
            </div>
            <div className="space-y-2">
                <h2 className="font-pelak-semibold text-xl sm:text-2xl text-gray-800 dark:text-gray-200">حقوق کاربران و حفظ حریم شخصی</h2>
                <p className="text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8 leading-8">در صورتی که مدرس دوره، طبق توضیحات و وعده‌های خود، پشتیبانی یا آپدیت‌های دوره رو انجام ندهد، بنا به درخواست دانشجو عودت وجه انجام خواهد شد. </p>
                <p className="text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8 leading-8">آکادمی قرآن‌آرا به اطلاعات خصوصی اشخاصى که از خدمات سایت استفاده می‏‌کنند، احترام گذاشته و از آن محافظت می‏‌کند. قرآن‌آرا متعهد می‏‌شود از حریم شخصی کاربران خود دفاع کند و فضای مطمئن و امنی را برای آن‌ها فراهم نماید.</p>
            </div>
        </section>
    );
}

export default Main;
