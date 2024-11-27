import Spinner from "./Spinner";

type UpdateIndicatorProps = { show: boolean };

function UpdateIndicator({ show }: UpdateIndicatorProps) {
    return (
        <div className="fixed right-8 top-8">
            <div className={`flex items-center gap-x-2 p-4 bg-white dark:bg-gray-800 rounded-2xl transition-all ${show ? "opacity-100" : "opacity-0"}`}>
                <span>در حال بروزرسانی دوره‌ها</span>
                <Spinner show />
            </div>
        </div>
    );
}

export default UpdateIndicator;
