import { SvgComponentProps } from "@/types/component.types";

function ArrowRightTop({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default ArrowRightTop;
