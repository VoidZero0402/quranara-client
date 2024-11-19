import Header from "@/components/specific/home/Header";
import CTABoxes from "@/components/specific/home/CTABoxes";
import Courses from "@/components/specific/home/Courses";
import News from "@/components/specific/home/News";

function Home() {
    return (
        <>
            <Header />
            <main className="my-20">
                <div className="container space-y-32">
                    <CTABoxes />
                    <Courses />
                    <News />
                </div>
            </main>
        </>
    );
}

export default Home;
