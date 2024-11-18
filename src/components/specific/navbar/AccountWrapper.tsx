"use client";

import dynamic from "next/dynamic";

import { AccountLoading } from "./Account";

const Account = dynamic(() => import("./Account"), { ssr: false, loading: AccountLoading });

function AccountWrapper() {
    return <Account />;
}

export default AccountWrapper;
