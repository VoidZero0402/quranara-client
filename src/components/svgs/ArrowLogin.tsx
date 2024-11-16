import { SvgComponentProps } from "@/types/components.types";

function ArrowLogin({ className = "w-5", strokeWidth = 1.25 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M4 12H14M14 12L11 9M14 12L11 15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default ArrowLogin;
