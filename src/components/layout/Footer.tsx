import Logo from "../ui/Logo";

function Footer() {
    return (
        <footer className="py-8 bg-white dark:bg-gray-850">
            <div className="container">
                <div className="flex gap-x-8">
                    <div className="flex flex-col gap-y-8 w-1/3">
                        <Logo className="h-12" />
                        <div className="flex flex-col gap-y-2">
                            <h3 className="font-pelak-semibold text-2xl text-gray-700 dark:text-gray-200 leading-">آکادمی قرآن آرا، رشد و پیشرفت</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-7">دوره‌های آموزشی قرآن‌آرا برای هر سطح و نیاز طراحی شده است. به آسانی با قرآن آشنا شوید و از آموزش‌های مفید بهره‌مند شوید. ما در قرآن‌آرا به شما کمک می‌کنیم تا به ساده‌ترین و موثرترین روش قرآن را یاد بگیرید.</p>
                        </div>
                    </div>
                    <div className="w-1/3 bg-gray-100 rounded-xl"></div>
                    <div className="w-1/3 bg-gray-100 rounded-xl"></div>
                </div>
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200 text-gray-500">
                    <span className="font-pelak-medium">ساخته شده با 💙 در قرآن آرا</span>
                    <span>کلیه حقوق مادی و معنوی وبسایت برای قرآن آرا محفوظ است.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
