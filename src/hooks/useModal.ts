import { useState, useTransition, useCallback } from "react";

function useModal<T>(initialProps: T = {} as T) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [props, setProps] = useState<T>(initialProps);
    const [isPending, startTransition] = useTransition();

    const open = useCallback((props: T) => {
        startTransition(() => {
            setProps(props);
            setIsOpen(true);
        });
    }, []);

    const close = useCallback(() => setIsOpen(false), []);

    return { isOpen, isPending, props, open, close };
}

export default useModal;
