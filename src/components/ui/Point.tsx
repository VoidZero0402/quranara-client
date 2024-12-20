import InfoCircle from "../svgs/InfoCircle";

type PointProps = React.ComponentProps<"div">;

function Point({ children }: PointProps) {
    return (
        <div className="flex items-center gap-x-1 text-blue-500 dark:text-blue-400">
            <InfoCircle className="shrink-0 w-5" />
            <p className="font-pelak-medium text-sm">{children}</p>
        </div>
    );
}

export default Point;
