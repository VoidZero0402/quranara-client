import { SvgComponentProps } from "@/types/component.types";

function Transform({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 4L4 10L14 10M20 10L17.5 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 20L20 14L10 14M4 14L6.5 14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default Transform;
