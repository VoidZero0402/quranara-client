import Magnifer from "@/components/svgs/Magnifer";

type HeaderProps = { query: string }

function Header({ query }: HeaderProps) {
    return (
        <div className="pb-8 flex-center">
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                    <Magnifer className="w-8 sm:w-10" />
                    <h1 className="font-pelak-semibold text-2xl sm:text-3xl">جستجو پیشرفته در قرآن‌آرا</h1>
                </div>
                <p className="font-pelak-medium sm:text-lg text-gray-500">نتیجه جستجو &quot;{query}&quot; در قرآن‌آرا</p>
            </div>
        </div>
    );
}

export default Header;
