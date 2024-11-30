import UIImage from "@/components/ui/Image";
import Placeholder from "@/components/ui/Placeholder";

type ImageProps = { srcs: string[] };

function Image({ srcs }: ImageProps) {
    return (
        <div className="my-8 flex flex-col md:flex-row gap-4">
            {srcs.map((src) => (
                <Placeholder key={src} className="w-full aspect-video rounded-xl" type="image" />
            ))}
        </div>
    );
}

export default Image;
