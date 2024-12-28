import CreateTvHeader from "@/components/layout/management-panel/tvs/create/CreateTvHeader";
import CreateTvForm from "@/components/form/template/management-panel/CreateTvForm";

function CreateTv() {
    return (
        <div className="space-y-4">
            <CreateTvHeader />
            <div className="py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
                <CreateTvForm />
            </div>
        </div>
    );
}

export default CreateTv;
