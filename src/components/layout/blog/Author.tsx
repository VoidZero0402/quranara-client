import Avatar from "@/components/ui/Avatar";

function Author() {
    return (
        <div className="flex items-center gap-x-2">
            <Avatar />
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <span className="block">
                    نوشته شده توسط <span className="font-pelak-semibold">حسین خانی</span>
                </span>
                <span className="block font-pelak-medium text-xs text-gray-600 dark:text-gray-400">مدیر و مؤسس آکادمی قرآن‌آرا</span>
            </div>
        </div>
    );
}

export default Author;
