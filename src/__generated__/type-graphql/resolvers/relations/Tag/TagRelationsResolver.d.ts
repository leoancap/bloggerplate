import { Post } from "../../../models/Post";
import { Tag } from "../../../models/Tag";
export declare class TagRelationsResolver {
    Post(tag: Tag, ctx: any): Promise<Post | null>;
}
