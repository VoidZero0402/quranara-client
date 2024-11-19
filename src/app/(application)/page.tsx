import Header from "@/components/specific/home/Header";
import CTABoxes from "@/components/specific/home/CTABoxes";

function Home() {
    return (
        <>
            <Header />
            <main className="my-10">
                <div className="container space-y-10">
                    <CTABoxes />
                </div>
            </main>
            <div className="h-[1000px]"></div>
        </>
    );
}

export default Home;
