import { Post } from "../../../models/Post";
import { Tag } from "../../../models/Tag";
import { User } from "../../../models/User";
import { PostTagsArgs } from "./args/PostTagsArgs";
export declare class PostRelationsResolver {
    tags(post: Post, ctx: any, args: PostTagsArgs): Promise<Tag[]>;
    user(post: Post, ctx: any): Promise<User>;
}
