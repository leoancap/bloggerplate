import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
export declare class TagOrderByWithRelationInput {
    name?: "asc" | "desc" | undefined;
    Post?: PostOrderByWithRelationInput | undefined;
    postId?: "asc" | "desc" | undefined;
}
