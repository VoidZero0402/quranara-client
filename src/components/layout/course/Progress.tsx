import Transform from "@/components/svgs/Transform";

type ProgressProps = { progress: number; hours: number };

function Progress({ progress, hours }: ProgressProps) {
    return (
        <div className="space-y-4 p-4 sm:p-6 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-2 font-pelak-medium">
                    <Transform />
                    میزان پیشرفت دوره
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">میزان پیشرفت دوره تقریبی‌ست و امکان تغییر دارد</p>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between font-pelak-medium text-gray-600 dark:text-gray-400">
                    <span>{hours} ساعت محتوا</span>
                    <span>{progress} درصد</span>
                </div>
                <div className="relative h-4 gray-light rounded-full overflow-hidden">
                    <div className="absolute left-0 h-4 bg-amber-400 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
}

export default Progress;
