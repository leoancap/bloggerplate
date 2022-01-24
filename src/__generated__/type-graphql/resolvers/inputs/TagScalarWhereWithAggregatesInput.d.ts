import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TagScalarWhereWithAggregatesInput {
    AND?: TagScalarWhereWithAggregatesInput[] | undefined;
    OR?: TagScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TagScalarWhereWithAggregatesInput[] | undefined;
    name?: StringWithAggregatesFilter | undefined;
    postId?: StringNullableWithAggregatesFilter | undefined;
}
