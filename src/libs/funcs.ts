export function convertToQueryString(params: Record<string, string | string[]>) {
    const searchParams = new URLSearchParams();

    for (const key in params) {
        if (Array.isArray(params[key])) {
            params[key] = params[key].join(",");
        }

        searchParams.set(key, params[key]);
    }

    return searchParams.toString();
}
