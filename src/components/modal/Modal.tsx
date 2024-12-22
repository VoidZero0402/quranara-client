"use client";

import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import { useEventListener } from "usehooks-ts";

import { cn } from "@/libs/cn";

import Button from "../ui/Button";
import XMark from "../svgs/XMark";

type ModalContextProps = { onClose: () => void };

const ModalContext = createContext<ModalContextProps>({ onClose: () => {} });

export type ModalInstanceProps = { isOpen: boolean; onClose: () => void };

type ModalProps = ModalInstanceProps & React.ComponentProps<"div">;

type ModalBodyProps = { scrollable?: boolean } & React.ComponentProps<"div">;

type ModalChildrensProps = React.ComponentProps<"div">;

function Modal({ children, isOpen, onClose, className }: ModalProps) {
    useEventListener("keydown", (event) => {
        if (event.key === "Escape") onClose();
    });

    return createPortal(
        <div className={cn("flex-center fixed inset-0 size-full bg-backdrop invisible opacity-0 transition-all duration-300 z-20", isOpen && "visible opacity-100")}>
            <div className={cn("p-4 sm:p-8 space-y-4 sm:rounded-2xl bg-white dark:bg-gray-850", className)}>
                <ModalContext.Provider value={{ onClose }}>{children}</ModalContext.Provider>
            </div>
        </div>,
        document.body
    );
}

export function ModalHeader({ children, className }: ModalChildrensProps) {
    const { onClose } = useContext(ModalContext);

    return (
        <div className={cn("flex items-center justify-between", className)}>
            <div className="font-pelak-medium text-gray-800 dark:text-gray-200">{children}</div>
            <Button size="sm" variant="neutral-base" className="size-12" onClick={onClose}>
                <XMark />
            </Button>
        </div>
    );
}

export function ModalBody({ children, className, scrollable }: ModalBodyProps) {
    return <div className={cn(scrollable && "max-h-[500px] overflow-auto with-custom-scroll", className)}>{children}</div>;
}

export function ModalFooter({ children, className }: ModalChildrensProps) {
    return <div className={cn("flex items-center justify-between", className)}>{children}</div>;
}

export default Modal;
