import { cookies } from "next/headers";
import React from "react";

async function DynamicComp() {
    await cookies();
    return <div>Dynamic Component</div>;
}

export default DynamicComp;
