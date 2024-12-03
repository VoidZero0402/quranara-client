import Link from "next/link";

function Session() {
    return (
        <div className="group flex items-center justify-between relative p-4 font-pelak-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center gap-x-2 group-hover:text-blue-500 dark:group-hover:text-amber-400 transition-all">
                <span className="flex-center size-8 text-sm gray-light group-hover:blue-light dark:group-hover:amber-light rounded-md transition-all">12</span>
                <Link href="#" className="text-sm">
                    مقدمه‌ای بر علوم قرآنی
                </Link>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">12:39</span>
        </div>
    );
}

export default Session;
