type Varients = "gray" | "primary" | "secondary" | "teal" | "danger";

type Field = { background: string; ball: string; text: string };

const varients: Record<Varients, Field> = {
    gray: {
        background: "bg-gray-100 dark:bg-gray-800",
        ball: "bg-gray-600 dark:bg-gray-200",
        text: "text-gray-600 dark:text-gray-200",
    },
    primary: {
        background: "bg-blue-50 dark:bg-blue-500/5",
        ball: "bg-blue-500",
        text: "text-blue-500",
    },
    secondary: {
        background: "bg-amber-50 dark:bg-amber-400/10",
        ball: "bg-amber-400",
        text: "text-amber-400",
    },
    danger: {
        background: "bg-red-50 dark:bg-red-500/10",
        ball: "bg-red-500",
        text: "text-red-500",
    },
    teal: {
        background: "bg-teal-50 dark:bg-teal-500/10",
        ball: "bg-teal-500",
        text: "text-teal-500",
    },
};

type BadgeLightProps = { varient?: Varients } & React.ComponentProps<"div">;

function BadgeLight({ children, varient = "gray" }: BadgeLightProps) {
    const { background, ball, text } = varients[varient];

    return (
        <div className={`flex items-center gap-x-2 w-max py-2.5 px-4 rounded-xl ${background}`}>
            <div className={`size-1.5 rounded-full ${ball}`}>
                <div className="size-full bg-inherit rounded-full animate-ping"></div>
            </div>
            <span className={`font-pelak-medium text-sm ${text}`}>{children}</span>
        </div>
    );
}

export default BadgeLight;
