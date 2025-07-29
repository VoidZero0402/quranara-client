import Plyr, { PlyrProps } from "plyr-react";
import "plyr-react/plyr.css";

function AudioPlayer(props: PlyrProps) {
    return (
        <div>
            <Plyr
                {...props}
                options={{
                    tooltips: {
                        controls: true,
                    },
                    i18n: {
                        play: "پخش صوت",
                        pause: "توقف صوت",
                        mute: "بی صدا",
                        settings: "تنظیمات",
                        pip: "حالت شناور",
                        enterFullscreen: "حالت تمام صفحه",
                        exitFullscreen: "خروج از حالت تمام صفحه",
                        speed: "سرعت",
                        normal: "پیش فرض",
                    },
                }}
            />
        </div>
    );
}

export function AudioPlayerLoading() {
    return (
        <div className="h-[52px]"></div>
    );
}


export default AudioPlayer;
