"use client";

import { createContext, useRef, useContext } from "react";

import { cn } from "@/libs/cn";

import CloseCircle from "../svgs/CloseCircle";

type DrawerContextProps = { onClose: () => void };

const DrawerContext = createContext<DrawerContextProps>({ onClose: () => {} });

type DrawerProps = { isOpen: boolean; onClose: () => void } & React.ComponentProps<"div">;

type DrawerChildrensProps = React.ComponentProps<"div">;

function Drawer({ children, isOpen, onClose, className }: DrawerProps) {
    const drawerRef = useRef<HTMLDivElement>(null);

    return (
        <div className={cn("fixed inset-0 size-full invisible z-20", isOpen && "visible")}>
            <div onClick={onClose} className={cn("size-full bg-backdrop invisible opacity-0 transition-all duration-300", isOpen && "visible opacity-100")}></div>
            <div ref={drawerRef} className={cn("absolute top-full left-0 w-full h-max bg-white dark:bg-gray-850 rounded-t-2xl overflow-hidden transform-gpu transition-all duration-300", className)} style={{ ...(isOpen && { top: `calc(100% - ${drawerRef.current?.scrollHeight}px)` }) }}>
                <DrawerContext.Provider value={{ onClose }}>{children}</DrawerContext.Provider>
            </div>
        </div>
    );
}

export function DrawerHeader({ children, className }: DrawerChildrensProps) {
    const { onClose } = useContext(DrawerContext);

    return (
        <div className={cn("flex items-center justify-between w-full p-5 bg-gray-50 dark:bg-gray-800 font-pelak-medium text-gray-800 dark:text-gray-200", className)}>
            {children}
            <button onClick={onClose}>
                <CloseCircle strokeWidth={1.5} />
            </button>
        </div>
    );
};

export function DrawerBody({ children, className }: DrawerChildrensProps) {
    return <div className={cn("w-full p-6", className)}>{children}</div>;
};

export default Drawer;
