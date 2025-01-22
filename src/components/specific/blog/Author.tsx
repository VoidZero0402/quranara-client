import Avatar from "@/components/ui/Avatar";

import { PopulatedUser } from "@/types/user.types";

type AvatarProps = { author: PopulatedUser }

function Author({ author }: AvatarProps) {
    return (
        <div className="flex items-center gap-x-2">
            <Avatar src={author.profile} />
            <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <span className="block">
                    نوشته شده توسط <span className="font-pelak-semibold">{author.username}</span>
                </span>
                <span className="block font-pelak-medium text-xs text-gray-600 dark:text-gray-400">مدیر و مؤسس آکادمی قرآن‌آرا</span>
            </div>
        </div>
    );
}

export default Author;
