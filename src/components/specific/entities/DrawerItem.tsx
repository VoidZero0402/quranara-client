import CheckCircle from "@/components/svgs/CheckCircle";

type DrawerItemProps = { isActive: boolean; handleChange: () => void } & React.ComponentProps<"div">;

function DrawerItem({ children, isActive, handleChange }: DrawerItemProps) {
    return (
        <div className={`flex items-center justify-between p-4 font-pelak-medium select-none transition-colors duration-300 ${isActive ? "text-blue-500 dark:text-amber-400" : "text-gray-800 dark:text-gray-200"}`} onClick={handleChange}>
            <div className="flex items-center gap-x-1">{children}</div>
            {isActive && <CheckCircle className="w-6 text-blue-500 dark:text-amber-400" />}
        </div>
    );
}

export default DrawerItem;
