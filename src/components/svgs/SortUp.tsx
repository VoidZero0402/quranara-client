import { SvgComponentProps } from "@/types/component.types";

function SortUp({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8H13" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M6 13H13" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M8 18H13" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M17 20V4L20 8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default SortUp;
