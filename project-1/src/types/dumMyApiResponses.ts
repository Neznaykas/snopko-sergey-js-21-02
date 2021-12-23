export interface ListResponseType<T> {
    data: Array<T>;
    total: number;
    page: number;
    limit: number;
}

export interface UsersType {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
}

export interface PostsState {
    posts: Array<PostPreview>;
    page: number;
    limit: number;
    total: number;
}

export interface PostPreview {
    id: string;
    text: string;
    image: string;
    likes: number;
    tags: Array<string>;
    publishDate: string;
    owner: UsersType;
    error?: string;
}

export interface PostListResponse extends ListResponseType<UsersType> {}
export interface PostsListResponse extends ListResponseType<PostPreview> {}