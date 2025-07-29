import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

import { getSession } from "@/api/queries/sessions";
import { checkAccess } from "@/api/queries/courses";

import { BASE_URL } from "@/constants/global";

import Header from "@/components/layout/session/Header";
import Details from "@/components/layout/session/Details";
import SessionContent from "@/components/layout/session/SessionContent";
import Question from "@/components/layout/session/Question";
import Topics from "@/components/layout/session/Topics";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<void | Metadata> {
    const { slug } = await params;

    const {
        data: { session },
        success,
    } = await getSession({ slug });

    if (success) {
        return {
            title: session.title,
            description: session.course.description,
            openGraph: {
                title: session.course.title,
                description: session.course.description,
                url: `${BASE_URL}/sessions/${session.slug}`,
                siteName: "قرآن‌آرا",
                images: [
                    {
                        url: session.course.cover,
                        width: 1280,
                        height: 720,
                    },
                ],
                locale: "fa_IR",
                type: "video.episode",
            },
        };
    }
}

async function Session({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const cookie = (await cookies()).toString();

    const {
        data: { session },
        status,
    } = await getSession({ slug }, cookie);

    if (status === 404) {
        notFound();
    }

    const { data } = await checkAccess({ courseId: session.course._id }, cookie);

    if (!session.isPublic && !data.hasAccess) {
        redirect("/");
    }

    return (
        <div className="my-8">
            <Header title={session.title} course={session.course} />
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-8 mt-8 sm:mt-12">
                    <main className="space-y-8 w-full xl:w-[70%]">
                        <Details title={session.title} order={session.order} topic={session.topic.title} video={session.video} cover={session.course.cover} attached={session.attached} type={session.type} />
                        {!!session.content && <SessionContent content={session.content} />}
                        <Question _id={session._id} slug={slug} />
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
