import { cn } from "@/libs/cn";

import Gallery from "../svgs/Gallery";

type PlaceholderProps = { type?: "box" | "image" } & React.ComponentProps<"div">;

function Placeholder({ type = "box", className }: PlaceholderProps) {
    return <div className={cn("flex-center bg-gray-100 dark:bg-gray-800/50 text-gray-200 dark:text-gray-700", className)}>{type === "image" && <Gallery className="w-12" />}</div>;
}

export default Placeholder;
