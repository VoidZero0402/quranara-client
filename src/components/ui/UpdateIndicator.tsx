import Spinner from "./Spinner";

type UpdateIndicatorProps = { show: boolean };

function UpdateIndicator({ show }: UpdateIndicatorProps) {
    return (
        <div className={`fixed right-8 top-8 transition-all ${show ? "visible opacity-100" : "invisible opacity-0"}`}>
            <div className="flex items-center gap-x-2 p-4 bg-white dark:bg-gray-800 rounded-2xl">
                <span>در حال بروزرسانی دوره‌ها</span>
                <Spinner show />
            </div>
        </div>
    );
}

export default UpdateIndicator;
