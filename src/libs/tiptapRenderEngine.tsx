import { JSONContent } from "@tiptap/react";

class TiptapRenderEngine {
    constructor(private content: JSONContent) {
        this.content = content;
    }

    getIndex() {}

    render() {}
}

export default TiptapRenderEngine;
