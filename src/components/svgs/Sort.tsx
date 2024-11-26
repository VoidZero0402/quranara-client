import { SvgComponentProps } from "@/types/component.types";

function Sort({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 18L16 16M16 6L20 10.125M16 6L12 10.125M16 6L16 13" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 18L12 13.875M8 18L4 13.875M8 18L8 11M8 6V8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default Sort;
