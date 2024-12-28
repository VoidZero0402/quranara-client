type AxiosConfigRequestOptions = Omit<RequestInit, "method" | "headers" | "body" | "next">;

type RequestOptions = Omit<RequestInit, "method"> & { query?: Record<string, any | string[]> };

type AxiosConfig = {
    baseURL?: string;
    headers?: HeadersInit;
    requestOptions?: AxiosConfigRequestOptions;
};

class Axios {
    private baseURL: string = "";
    private headers: HeadersInit = {};
    private requestOptions: AxiosConfigRequestOptions = {};

    constructor(config: AxiosConfig) {
        this.baseURL = config.baseURL ?? "";
        this.headers = config.headers ?? {};
        this.requestOptions = config.requestOptions ?? {};
    }

    private async resolve(method: string, url: string, options?: RequestOptions) {
        try {
            const response = await fetch(this.getRequestURL(url, options?.query), {
                method,
                ...this.requestOptions,
                ...options,
                headers: Object.assign(this.headers, options?.headers),
            });

            return await this.parseResponseToJSON(response);
        } catch (err) {
            return { success: false, status: 500, data: { error: err } };
        }
    }

    private async parseResponseToJSON(response: Response) {
        const data = await response.json();
        return data;
    }

    private getRequestURL(url: string, query?: Record<string, any | string[]>) {
        const requestURL = `${this.baseURL}${url}`;

        if (query) {
            const queryString = this.convertToQueryString(query);
            return requestURL.concat(queryString);
        }

        return requestURL;
    }

    private convertToQueryString(params: Record<string, any | string[]>) {
        const searchParams = new URLSearchParams();

        for (const key in params) {
            if (Array.isArray(params[key])) {
                params[key] = params[key].join(",");
            }

            searchParams.set(key, params[key]);
        }

        return `?${searchParams.toString()}`;
    }

    async get(url: string, options?: RequestOptions) {
        return this.resolve("GET", url, options);
    }

    async post(url: string, options?: RequestOptions) {
        return this.resolve("POST", url, options);
    }

    async put(url: string, options?: RequestOptions) {
        return this.resolve("PUT", url, options);
    }

    async delete(url: string, options?: RequestOptions) {
        return this.resolve("DELETE", url, options);
    }

    async patch(url: string, options?: RequestOptions) {
        return this.resolve("PATCH", url, options);
    }

    async custom(method: string, url: string, options?: RequestOptions) {
        return this.resolve(method, url, options);
    }
}

export default Axios;
