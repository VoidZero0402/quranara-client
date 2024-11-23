import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { cn } from "@/libs/cn";

type AvatarProps = { src?: string | StaticImport; alt?: string } & React.ComponentProps<"div">;

function Avatar({ src = "./profile.svg", alt = "", className }: AvatarProps) {
    return (
        <div className={cn("flex-center shrink-0 size-12 rounded-xl select-none overflow-hidden", className)}>
            <Image src={src} alt={alt} width={100} height={100} className="size-full object-cover" />
        </div>
    );
}

export default Avatar;
