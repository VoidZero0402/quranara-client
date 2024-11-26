import { SvgComponentProps } from "@/types/component.types";

function SortLines({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 7L9 7M2 7L5 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M19 12H16M5 12L12 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M16 17H8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
}

export default SortLines;
