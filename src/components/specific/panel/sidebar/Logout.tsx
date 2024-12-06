import Button from "@/components/ui/Button";
import LogoutIcon from "@/components/svgs/Logout";

function Logout() {
    return (
        <Button size="lg" rounded="full" variant="neutral-base">
            <LogoutIcon />
            خروج از حساب کاربری
        </Button>
    );
}

export default Logout;
