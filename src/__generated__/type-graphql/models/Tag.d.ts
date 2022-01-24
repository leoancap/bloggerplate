import { Post } from "../models/Post";
export declare class Tag {
    name: string;
    Post?: Post | null;
    postId?: string | null;
}
