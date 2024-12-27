import ChatRoundDots from "@/components/svgs/ChatRoundDots";

type PreviewProps = {
    source: {
        text: string;
        title: string;
    };
    message: string;
};

function Preview({ message, source }: PreviewProps) {
    return (
        <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="space-y-2">
                <div className="flex items-center gap-x-1 font-pelak-medium text-gray-800 dark:text-gray-200">
                    <ChatRoundDots />
                    متن دیدگاه کاربر
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-8">{message}</p>
            </div>
            <p className="text-gray-800 dark:text-gray-200">
                دیدگاه ثبت شده برای {source?.text} <span className="font-pelak-medium underline text-amber-400">{source?.title}</span>
            </p>
        </div>
    );
}

export default Preview;
