import { ROLES } from "@/constants/roles";

import { authenticate } from "@/libs/server/funcs";

import Navigation from "@/components/layout/management-panel/shared/Navigation";

async function ManagementPanelLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    await authenticate(ROLES.MANAGER);

    return (
        <div className="lg:pr-72">
            <div className="flex flex-col gap-y-4 sm:p-4">
                <Navigation />
                <main className="my-4 grow h-full sm:rounded-2xl">{children}</main>
            </div>
        </div>
    );
}

export default ManagementPanelLayout;
