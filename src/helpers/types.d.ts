export interface TypePost {
    name: string;
    date: string;
    description: string;
}
export interface TypePostMutation {
    name: string;
    date: string;
    description: string;
    id: string;
}
export interface TypePostsList {
    [id: string]: TypePost;
}
