import Header from "@/components/layout/about-us/Header";
import Introduction from "@/components/layout/about-us/Introduction";
import Story from "@/components/layout/about-us/Story";
import CTA from "@/components/layout/about-us/CTA";
import Founder from "@/components/layout/about-us/Founder";
import Activities from "@/components/layout/about-us/Activities";

function AboutUs() {
    return (
        <div className="my-8">
            <Header />
            <main className="my-20">
                <div className="container space-y-32">
                    <Introduction />
                    <Story />
                    <CTA />
                    <Founder />
                    <Activities />
                </div>
            </main>
        </div>
    );
}

/*

All We Have:

- texts
- 2 images
- 1 video

Sections:

- Header
- Introduction Video
- About Quranara
- CTA ✅
- Our Team
- Quranara services

*/

export default AboutUs;
