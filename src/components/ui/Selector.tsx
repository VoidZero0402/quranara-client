"use client";

type SelectorProps = React.ComponentProps<"div">;

type SelectorItemProps = { isActive: boolean; onSelect: () => void } & React.ComponentProps<"div">;

function Selector({ children, className }: SelectorProps) {
    return <div className={className}>{children}</div>;
}

export function SelectorItem({ children, isActive, onSelect }: SelectorItemProps) {
    return (
        <div className={`p-4 text-center w-full rounded-xl transition-all ${isActive ? "amber-light" : "gray-light cursor-pointer"}`} {...(!isActive && { onClick: onSelect })}>
            {children}
        </div>
    );
}

export default Selector;
