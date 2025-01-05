import InfoCircle from "@/components/svgs/InfoCircle";

function Header() {
    return (
        <div className="pb-8 flex-center">
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex items-center gap-x-2 text-gray-700 dark:text-gray-300">
                    <InfoCircle className="w-8" />
                    <h1 className="font-pelak-semibold text-2xl sm:text-3xl">قوانین و مقررات قرآن‌آرا</h1>
                </div>
                <p className="font-pelak-medium sm:text-lg text-gray-500">قوانین آکادمی، شرایط استفاده و حریم خصوصی</p>
            </div>
        </div>
    );
}

export default Header;
