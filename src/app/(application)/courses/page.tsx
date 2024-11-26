import Header from "@/components/specific/courses/Header";
import Navigation from "@/components/specific/courses/Navigation";
import CoursesGrid from "@/components/specific/courses/CoursesGrid";

function Courses() {
    return (
        <main className="my-20">
            <div className="container space-y-8">
                <Header />
                <Navigation />
                <CoursesGrid />
            </div>
        </main>
    );
}

export default Courses;
