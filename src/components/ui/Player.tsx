import Plyr, { PlyrProps } from "plyr-react";
import "plyr-react/plyr.css";

import Skeleton, { SkeletonFrame } from "./Skeleton";

function Player(props: PlyrProps) {
    return (
        <div className="aspect-video">
            <Plyr
                {...props}
                options={{
                    tooltips: {
                        controls: true,
                    },
                    i18n: {
                        play: "پخش ویدیو",
                        pause: "توقف ویدیو",
                        mute: "بی صدا",
                        settings: "تنظیمات",
                        pip: "حالت شناور",
                        enterFullscreen: "حالت تمام صفحه",
                        exitFullscreen: "خروج از حالت تمام صفحه",
                        speed: "سرعت",
                        normal: "پیش فرض",
                    },
                    ratio: "16:9",
                }}
            />
        </div>
    );
}

export function PlayerLoading() {
    return (
        <Skeleton>
            <SkeletonFrame className="aspect-video rounded-xl"></SkeletonFrame>
        </Skeleton>
    );
}

export default Player;
