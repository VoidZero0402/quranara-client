import Header from "@/components/layout/home/Header";
import CTABoxes from "@/components/layout/home/CTABoxes";
import Courses from "@/components/layout/home/Courses";
import News from "@/components/layout/home/News";
import Tvs from "@/components/layout/home/Tvs";
import SocialMedia from "@/components/layout/home/SocialMedia";
import Blog from "@/components/layout/home/Blog";
import AboutUs from "@/components/layout/home/AboutUs";

function Home() {
    return (
        <>
            <Header />
            <main className="my-20">
                <div className="container space-y-32">
                    <CTABoxes />
                    <Courses />
                    <News />
                    <Tvs />
                    <SocialMedia />
                    <Blog />
                    <AboutUs />
                </div>
            </main>
        </>
    );
}

export default Home;
