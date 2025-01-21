import PlayCircle from "@/components/svgs/PlayCircle";

function Header() {
    return (
        <div className="pb-8 flex-center">
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                    <PlayCircle className="w-8" />
                    <h1 className="font-pelak-semibold text-2xl sm:text-3xl">ویدیوهای آموزشی قرآن‌آرا</h1>
                </div>
                <p className="font-pelak-medium sm:text-lg text-gray-500">ویدیوهای کاربردی برای آشنایی با قرآن</p>
            </div>
        </div>
    );
}

export default Header;
