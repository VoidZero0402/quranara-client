type Varients = "#3b82f6" | "#fbbf24" | "#ef4444" | "#14b8a6" | "#0ea5e9" | "inherit";

const varients: Record<Varients, string> = {
    "#3b82f6": "text-blue-500",
    "#fbbf24": "text-amber-400",
    "#ef4444": "text-red-500",
    "#14b8a6": "text-teal-500",
    "#0ea5e9": "text-sky-500",
    inherit: "text-inherit",
};

type ColoredTextProps = {
    varient: Varients;
} & React.ComponentProps<"span">;

function ColoredText({ children, varient = "inherit" }: ColoredTextProps) {
    return <span className={varients[varient]}>{children}</span>;
}

export default ColoredText;
