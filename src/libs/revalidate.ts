export async function revalidate(...tags: string[]) {
    const queryString = tags.map((tag) => `path=${tag}`).join("&");
    const url = `/api/revalidate?${queryString}`;

    await fetch(url);
}
