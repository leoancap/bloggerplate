import { TagCountOrderByAggregateInput } from "../inputs/TagCountOrderByAggregateInput";
import { TagMaxOrderByAggregateInput } from "../inputs/TagMaxOrderByAggregateInput";
import { TagMinOrderByAggregateInput } from "../inputs/TagMinOrderByAggregateInput";
export declare class TagOrderByWithAggregationInput {
    name?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    _count?: TagCountOrderByAggregateInput | undefined;
    _max?: TagMaxOrderByAggregateInput | undefined;
    _min?: TagMinOrderByAggregateInput | undefined;
}
