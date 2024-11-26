import { SvgComponentProps } from "@/types/component.types";

function SortDown({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16L13 16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M6 11H13" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M8 6L13 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M17 4L17 20L20 16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default SortDown;
