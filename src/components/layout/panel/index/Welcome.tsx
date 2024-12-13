import StarShine from "@/components/svgs/StarShine";
import { getCookieUser } from "@/libs/server/funcs";

async function Welcome() {
    const user = await getCookieUser();

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white dark:bg-gray-850 sm:rounded-2xl">
            <div className="flex-center shrink-0 size-16 gray-light rounded-full">
                <StarShine className="w-8" />
            </div>
            <div className="space-y-2 text-center sm:text-start">
                <span className="font-pelak-medium text-gray-800 dark:text-gray-200 leading-7">سلام {user.username}، به پنل کاربری خودت خوش اومدی!</span>
                <p className="text-gray-600 dark:text-gray-400 leading-7">در اینجا میتونی حساب کاربری خودت رو مدیریت کنی و تجربه کاربری بهتری داشته باشی!</p>
            </div>
        </div>
    );
}

export default Welcome;
