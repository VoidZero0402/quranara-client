"use client";

import useToggleState from "@/hooks/useToggleState";

import LogoutModal from "@/components/modal/LogoutModal";

import LogoutIcon from "@/components/svgs/Logout";

function Logout() {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <button className="flex items-center gap-x-2 w-full py-3 px-4 font-pelak-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500/15 rounded-xl cursor-pointer transition-colors" onClick={open}>
                <LogoutIcon />
                خروج از حساب
            </button>
            <LogoutModal isOpen={isOpen} onClose={close} />
        </>
    );
}

export default Logout;
