"use client";

import { createContext, useContext } from "react";
import { useEventListener } from "usehooks-ts";

import { cn } from "@/libs/cn";

import Button from "../ui/Button";
import XMark from "../svgs/XMark";

type ModalContextProps = { onClose: () => void };

const ModalContext = createContext<ModalContextProps>({ onClose: () => {} });

type ModalProps = { isOpen: boolean; onClose: () => void } & React.ComponentProps<"div">;

type ModalChildrensProps = React.ComponentProps<"div">;

function Modal({ children, isOpen, onClose, className }: ModalProps) {
    useEventListener("keydown", (event) => {
        if (event.key === "Escape") onClose();
    });

    return (
        <div className={cn("flex-center fixed inset-0 size-full bg-gray-500/10 dark:bg-gray-800/10 invisible opacity-0 transition-all duration-300", isOpen && "visible opacity-100")}>
            <div className={cn("p-4 space-y-4 rounded-xl bg-white dark:bg-gray-800", className)}>
                <ModalContext.Provider value={{ onClose }}>{children}</ModalContext.Provider>
            </div>
        </div>
    );
}

Modal.Header = function ({ children, className }: ModalChildrensProps) {
    const { onClose } = useContext(ModalContext);

    return (
        <div className={cn("flex items-center justify-between", className)}>
            <span className="font-pelak-medium text-gray-800 dark:text-gray-300">{children}</span>
            <Button size="sm" variant="neutral-base" className="gap-x-1" onClick={onClose}>
                <XMark />
            </Button>
        </div>
    );
};

Modal.Body = function ({ children, className }: ModalChildrensProps) {
    return <div className={cn("", className)}>{children}</div>;
};

Modal.Footer = function ({ children, className }: ModalChildrensProps) {
    return <div className={cn("flex items-center justify-between", className)}>{children}</div>;
};

export default Modal;
