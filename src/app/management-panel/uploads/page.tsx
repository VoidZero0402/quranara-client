import Uploader from "@/components/layout/management-panel/uploads/Uploader";
import Key from "@/components/svgs/Key";

function Uploads() {
    return (
        <div className="space-y-8">
            <div className="space-y-2 p-4 sm:p-0">
                <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                    <Key className="w-8" />
                    آپلود فایل
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">فایل هاتو آپلود کن تا سریع بدست کاربرا برسه!</p>
            </div>
            <div className="flex flex-col xl:flex-row gap-8">
                <Uploader />
            </div>
        </div>
    );
}

export default Uploads;
