interface AxiosConfigRequestOptions extends Omit<RequestInit, "method" | "headers" | "body" | "next"> {}

interface RequestOptions extends Omit<RequestInit, "method"> {}

interface AxiosConfig {
    baseURL?: string;
    headers?: HeadersInit;
    requestOptions?: AxiosConfigRequestOptions;
}

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
        const response = await fetch(`${this.baseURL}${url}`, {
            method,
            headers: Object.assign(this.headers, options?.headers),
            ...this.requestOptions,
            ...options,
        });

        return await this.parseResponseToJSON(response);
    }

    private async parseResponseToJSON(response: Response) {
        const data = await response.json();
        return data;
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
