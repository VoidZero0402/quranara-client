import { SvgComponentProps } from "@/types/component.types";

function HamburgerMenu({ className = "w-6", strokeWidth = 1.5 }: SvgComponentProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7L7 7M20 7L11 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M20 17H17M4 17L13 17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M4 12H7L20 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
}

export default HamburgerMenu;
