import { useState } from "react";

import useClickOutside from "./useClickOutside";

function useToggle() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = () => setIsOpen((isOpen) => !isOpen);

    const ref = useClickOutside(() => setIsOpen(false));

    return { ref, isOpen, toggleOpen };
}

export default useToggle;
