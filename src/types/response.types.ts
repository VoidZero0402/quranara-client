export type Response<T> = {
    success: boolean;
    status: number;
    data: T;
};
