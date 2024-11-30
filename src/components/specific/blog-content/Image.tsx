import UIImage from "@/components/ui/Image";
import Placeholder from "@/components/ui/Placeholder";

import { Image as ImageProps } from "@/types/blog-content.types";

function Image({ srcs }: ImageProps) {
    return (
        <div className="my-8 flex gap-x-8">
            {srcs.map((src) => (
                <Placeholder key={src} className="w-full aspect-video rounded-xl" type="image" />
            ))}
        </div>
    );
}

export default Image;
