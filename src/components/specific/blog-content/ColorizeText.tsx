import { cva, VariantProps } from "class-variance-authority";

const colorize = cva("font-pelak-medium", {
    variants: {
        color: {
            blue: "text-blue-500 dark:text-blue-400",
            amber: "text-amber-500 dark:text-amber-400",
            red: "text-red-500 dark:text-red-400",
        },
    },
    defaultVariants: {
        color: "blue",
    },
});

type ColorizeTextProps = VariantProps<typeof colorize> & React.ComponentProps<"span">;

function ColorizeText({ children, color }: ColorizeTextProps) {
    return <span className={colorize({ color })}>{children}</span>;
}

export default ColorizeText;
