import Header from "@/components/specific/home/Header";
import CTABoxes from "@/components/specific/home/CTABoxes";
import Courses from "@/components/specific/home/Courses";

function Home() {
    return (
        <>
            <Header />
            <main className="my-20">
                <div className="container space-y-32">
                    <CTABoxes />
                    <Courses />
                </div>
            </main>
        </>
    );
}

export default Home;
