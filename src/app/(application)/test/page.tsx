"use client";

import Tiptap from "@/components/ui/editor/Tiptap";

function page() {
    return (
        <div className="container mt-10">
            <Tiptap onSave={(c) => console.log(c)} store={{ key: "test-tiptap", intervalMs: 5000 }} />
        </div>
    );
}

export default page;
