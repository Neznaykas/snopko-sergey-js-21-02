export interface ListResponseType<T> {
    data: Array<T>;
    total: number;
    page: number;
    limit: number;
}

export interface UsersType {
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
}

export interface PostListResponse extends ListResponseType<UsersType> {}