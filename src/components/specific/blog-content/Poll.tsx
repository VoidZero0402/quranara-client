import QuestionCircle from "@/components/svgs/QuestionCircle";
import CheckCircle from "@/components/svgs/CheckCircle";

type OptionProps = { active: boolean } & React.ComponentProps<"div">;

function Poll() {
    return (
        <div className="my-8 space-y-8 p-6 gray-light bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-2 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                    <QuestionCircle className="w-8" />
                    نظرسنجی
                </span>
                <p className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 leading-6">نظر شما بصورت ناشناس ثبت خواهد شد، با خیال راحت گزینه مورد نظر را انتخاب کنید</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <Option active={false}>عملکرد برنامه را بهبود</Option>
                <Option active={false}>عملکرد برنامه را بهبود</Option>
                <Option active={false}>عملکرد برنامه را بهبود</Option>
                <Option active={true}>صورت ناشناس ثبت خواهد نظر را انتخاب</Option>
            </div>
        </div>
    );
}

function Option({ children, active }: OptionProps) {
    return (
        <div className={`flex items-center justify-between gap-x-4 p-4 font-pelak-medium leading-7 rounded-xl cursor-pointer transition-all ${active ? "blue-light dark:amber-light" : "gray-light hover:bg-gray-200 dark:hover:bg-gray-500/15"}`}>
            {children}
            {active && <div className="shrink-0"><CheckCircle /></div>}
        </div>
    );
}

export default Poll;
