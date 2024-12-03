import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

import { getSession } from "@/api/queries/sessions";
import { checkAccessServerSide } from "@/api/queries/courses";

import Header from "@/components/layout/session/Header";
import Details from "@/components/layout/session/Details";
import SessionContent from "@/components/layout/session/SessionContent";
import Question from "@/components/layout/session/Question";
import Topics from "@/components/layout/session/Topics";

async function Session({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const {
        data: { session },
        status,
    } = await getSession({ slug });

    if (status === 404) {
        notFound();
    }

    const { data } = await checkAccessServerSide({ courseId: session.course._id }, (await cookies()).toString());

    if (!session.isPublic && !data.hasAccess) {
        redirect("/");
    }

    return (
        <div className="my-8">
            <Header title={session.title} course={session.course} />
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-8 my-12">
                    <main className="space-y-8 w-full xl:w-[70%]">
                        <Details title={session.title} order={session.order} topic={session.topic.title} video={session.video} cover={session.course.cover} attached={session.attached} />
                        <SessionContent />
                        <Question />
                    </main>
                    <aside className="flex flex-col md:flex-row xl:flex-col gap-8 w-full xl:w-[30%]">
                        <Topics slug={session.course.slug} hasAccess={data.hasAccess} />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Session;
