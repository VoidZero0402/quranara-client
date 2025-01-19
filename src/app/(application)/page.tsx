import Header from "@/components/layout/home/Header";
import CTABoxes from "@/components/layout/home/CTABoxes";
import Courses from "@/components/layout/home/Courses";
import News from "@/components/layout/home/News";
import Tvs from "@/components/layout/home/Tvs";
import SocialMedia from "@/components/layout/home/SocialMedia";
import Blog from "@/components/layout/home/Blog";
import AboutUs from "@/components/layout/home/AboutUs";

import JSONLD from "@/components/JSONLD";

const OrganizationJSONLinkedData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "قرآن‌آرا",
    url: process.env.NEXT_PUBLIC_FRONTEND_URL,
    logo: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/logo.png`,
    sameAs: ["https://instagram.com/quranara.academy"],
};

const WebPageJSONLinkedData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "صفحه اصلی قرآن‌آرا",
    description: "قرآن‌آرا؛ پلی به سوی یادگیری و درک بهتر قرآن",
    url: process.env.NEXT_PUBLIC_FRONTEND_URL,
};

function Home() {
    return (
        <div className="my-8">
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
            <JSONLD data={OrganizationJSONLinkedData} />
            <JSONLD data={WebPageJSONLinkedData} />
        </div>
    );
}

export default Home;
