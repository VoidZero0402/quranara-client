import { SvgComponentProps } from "@/types/component.types";

function ArrowRight({ className = "w-5", strokeWidth = 1.25 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L11 7.33333M9 19L15 12L13.5 10.25" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default ArrowRight;
