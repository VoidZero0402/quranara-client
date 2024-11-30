import { SvgComponentProps } from "@/types/component.types";

function Reply({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12L9.5 7M4.5 12L9.5 17M4.5 12L11 12M14.5 12C16.1667 12 19.5 13 19.5 17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default Reply;
