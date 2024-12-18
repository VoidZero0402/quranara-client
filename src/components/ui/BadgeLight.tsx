type BadgeLightProps = React.ComponentProps<"div">;

function BadgeLight({ children }: BadgeLightProps) {
    return (
        <div className="flex items-center gap-x-2 w-max py-2.5 px-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div className="size-1.5 bg-gray-600 dark:bg-gray-200 rounded-full">
                <div className="size-full bg-gray-600 dark:bg-gray-200 rounded-full animate-ping"></div>
            </div>
            <span className="font-pelak-medium text-sm text-gray-600 dark:text-gray-200">{children}</span>
        </div>
    );
}

export default BadgeLight;
