import CreateNewsHeader from "@/components/layout/management-panel/news/create/CreateNewsHeader";
import CreateNewsForm from "@/components/form/template/management-panel/CreateNewsForm";

function CreateNews() {
    return (
        <div className="space-y-4">
            <CreateNewsHeader />
            <div className="py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
                <CreateNewsForm />
            </div>
        </div>
    );
}

export default CreateNews;
