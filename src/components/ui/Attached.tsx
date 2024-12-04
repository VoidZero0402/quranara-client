import { ATTACHED_FILE_TYPES } from "@/constants/files";

import Gallery from "../svgs/Gallery";
import Music from "../svgs/Music";
import Folder from "../svgs/Folder";

import { AttachedType } from "@/types/attached.types";

type AttachedProps = { type: AttachedType; url: string };

function Attached({ type, url }: AttachedProps) {
    return (
        <a href={url} download data-disable-nprogress={true} className="flex items-center gap-x-2 w-max py-2.5 px-4 font-pelak-medium blue-light dark:teal-light rounded-xl">
            {type === ATTACHED_FILE_TYPES.IMAGE ? <Gallery /> : type === ATTACHED_FILE_TYPES.AUDIO ? <Music /> : <Folder />}
            فایل پیوست
        </a>
    );
}

export default Attached;
