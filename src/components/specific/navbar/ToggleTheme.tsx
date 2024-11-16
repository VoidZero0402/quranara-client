import Button from "@/components/ui/Button";
import Moon from "@/components/svgs/Moon";
import Sun from "@/components/svgs/Sun";

function ToggleTheme() {
    return (
        <Button size="circle" rounded="lg" variant="neutral-base">
            <Moon className="w-6" />
            {/* <Sun className="w-6" /> */}
        </Button>
    );
}

export default ToggleTheme;
