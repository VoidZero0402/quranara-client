export type Response<T> = {
    success: boolean;
    status: number;
    data: T;
    error?: string;
};

export type Pagination = { page: number; limit: number; pagesCount: number; count: number };

export type MessageResponse = Promise<Response<{ message: string }>>;
