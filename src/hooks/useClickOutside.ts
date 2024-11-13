import { useRef, useEffect } from "react";

function useClickOutside(handler: () => void) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const maybeHandler: EventListener = (event) => {
            if (ref.current) {
                if (!ref.current.contains(event.target as Node)) {
                    handler();
                }
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return ref;
}

export default useClickOutside;
