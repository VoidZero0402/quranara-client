"use client";

import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import { useEventListener } from "usehooks-ts";

import { cn } from "@/libs/cn";

import Button from "../ui/Button";
import XMark from "../svgs/XMark";

type OffCanvasContextProps = { onClose: () => void };

const OffCanvasContext = createContext<OffCanvasContextProps>({ onClose: () => {} });

export type OffCanvasInstanceProps = { isOpen: boolean; onClose: () => void };

type OffCanvasProps = OffCanvasInstanceProps & React.ComponentProps<"div">;

type OffCanvasHeaderProps = React.ComponentProps<"div">;

function OffCanvas({ children, isOpen, onClose, className }: OffCanvasProps) {
    useEventListener("keydown", (event) => {
        if (event.key === "Escape") onClose();
    });

    return createPortal(
        <div className={cn("fixed left-0 top-0 bottom-0 size-full z-20 invisible", isOpen && "visible")}>
            <div className={cn("size-full absolute bg-backdrop invisible opacity-0 transition-all duration-500", isOpen && "visible opacity-100")}></div>
            <div className={cn("w-full sm:w-4/5 h-full absolute -right-full sm:-right-[80%] p-4 sm:p-8 space-y-4 bg-white dark:bg-gray-850 transition-all duration-500", isOpen && "-right-0 sm:-right-0", className)}>
                <OffCanvasContext.Provider value={{ onClose }}>{children}</OffCanvasContext.Provider>
            </div>
        </div>,
        document.body
    );
}

export function OffCanvasHeader({ children, className }: OffCanvasHeaderProps) {
    const { onClose } = useContext(OffCanvasContext);

    return (
        <div className={cn("flex items-center justify-between gap-4", className)}>
            <div className="font-pelak-medium text-gray-800 dark:text-gray-200">{children}</div>
            <Button size="sm" variant="neutral-base" className="size-12" onClick={onClose}>
                <XMark />
            </Button>
        </div>
    );
}

export default OffCanvas;
