import Header from "@/components/layout/blog/Header";
import Main from "@/components/layout/blog/Main";

function Blog() {
    return (
        <main className="my-20">
            <div className="container space-y-8">
                <Header />
                <Main />
            </div>
        </main>
    );
}

export default Blog;
