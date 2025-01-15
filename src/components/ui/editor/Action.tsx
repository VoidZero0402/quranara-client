type ActionProps = React.ComponentProps<"button"> & { isActive: boolean; label?: string };

function Action({ children, label = "", isActive, disabled, onClick }: ActionProps) {
    return (
        <div className="flex-center relative">
            <button type="button" onClick={onClick} disabled={disabled} className={`flex-center peer size-10 rounded-xl transition-colors ${isActive ? "text-white bg-blue-500" : "text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-750 disabled:bg-gray-300 dark:disabled:bg-gray-700"}`}>
                {children}
            </button>
            <div className="absolute -top-10 m-auto w-max py-2 px-3 bg-white dark:bg-gray-850 font-pelak-medium text-xs text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-800 rounded-lg opacity-0 peer-hover:opacity-100 transition-all">{label}</div>
        </div>
    );
}

export default Action;
