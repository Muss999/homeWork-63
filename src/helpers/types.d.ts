export interface TypePost {
    name: string;
    date: string;
    description: string;
}
export interface TypePostsList {
    [id: string]: TypePost;
}
