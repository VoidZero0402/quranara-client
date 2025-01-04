import { cva, VariantProps } from "class-variance-authority";

const iconButton = cva("peer text-gray-600 dark:text-gray-400 transition-all", {
    variants: {
        variant: {
            primary: "hover:text-blue-500 dark:hover:text-blue-500",
            secondary: "hover:text-amber-500 dark:hover:text-amber-400",
            danger: "hover:text-red-500 dark:hover:text-red-500",
            teal: "hover:text-teal-500 dark:hover:text-teal-500",
            gray: "hover:text-gray-800 dark:hover:text-gray-200",
        },
    },
    defaultVariants: {
        variant: "gray",
    },
});

type IconButtonProps = VariantProps<typeof iconButton> & { label: string } & React.ComponentProps<"button">;

function IconButton({ children, label, variant = "gray", ...props }: IconButtonProps) {
    return (
        <div className="flex-center relative size-8">
            <button className={iconButton({ variant })} {...props}>
                {children}
            </button>
            <div className="absolute -top-10 m-auto w-max py-2.5 px-4 bg-white dark:bg-gray-850 font-pelak-medium text-xs text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-800 rounded-lg opacity-0 peer-hover:opacity-100 transition-all">{label}</div>
        </div>
    );
}

export default IconButton;
