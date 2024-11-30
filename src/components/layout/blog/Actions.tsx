import Bookmark from "@/components/svgs/Bookmark";
import Heart from "@/components/svgs/Heart";

function Actions() {
    return (
        <div className="flex items-center gap-x-4">
            <button className="flex items-center gap-x-2 py-2.5 px-4 font-pelak-medium red-light rounded-xl">
                <Heart />
                پسندیدن
            </button>
            <button className="flex items-center gap-x-2 py-2.5 px-4 font-pelak-medium blue-light rounded-xl">
                <Bookmark />
                ذخیره کردن
            </button>
        </div>
    );
}

export default Actions;
