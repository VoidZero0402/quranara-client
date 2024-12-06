import Spinner from "./Spinner";

type UpdateIndicatorProps = { show: boolean, text: string };

function UpdateIndicator({ show, text }: UpdateIndicatorProps) {
    return (
        <div className={`fixed right-8 top-8 transition-all z-30 ${show ? "visible opacity-100" : "invisible opacity-0"}`}>
            <div className="flex items-center gap-x-2 p-4 bg-white dark:bg-gray-800 rounded-2xl">
                <span>{text}</span>
                <Spinner show />
            </div>
        </div>
    );
}

export default UpdateIndicator;
