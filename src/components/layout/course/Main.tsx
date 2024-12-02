import Navigation from "./Navigation";
import Details from "./Details";
import IntroContent from "./IntroContent";

function Main() {
    return (
        <main className="space-y-8 w-[70%]">
            <Navigation />
            <Details />
            <IntroContent />
        </main>
    );
}

export default Main;
