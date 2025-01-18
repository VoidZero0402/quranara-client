import revalidateTags from "@/actions/revalidate";

export async function revalidate(...tags: string[]) {
    await revalidateTags(tags);
}
