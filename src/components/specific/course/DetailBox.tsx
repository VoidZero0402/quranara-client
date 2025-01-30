type DetailBoxProps = { text: string; caption: string } & React.ComponentProps<"div">;

function DetailBox({ children, text, caption }: DetailBoxProps) {
    return (
        <div className="flex items-center gap-x-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div className="flex-center size-16 bg-amber-500/5 rounded-full">
                <div className="flex-center size-12 p-2 bg-amber-500/10 text-amber-400 rounded-full">{children}</div>
            </div>
            <div className="space-y-2">
                <span className="block font-pelak-semibold text-gray-800 dark:text-gray-200">{text}</span>
                <span className="block text-sm text-gray-600 dark:text-gray-400">{caption}</span>
            </div>
        </div>
    );
}

export default DetailBox;
