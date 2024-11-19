export type Response<T> = {
    success: boolean;
    status: number;
    data: T;
};

export type Pagination = { page: number; limit: number; pagesCount: number; count: number };
