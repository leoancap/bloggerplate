import { TagOrderByRelationAggregateInput } from "../inputs/TagOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class PostOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    tags?: TagOrderByRelationAggregateInput | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
}
