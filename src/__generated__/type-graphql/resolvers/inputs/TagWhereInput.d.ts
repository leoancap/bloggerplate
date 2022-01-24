import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TagWhereInput {
    AND?: TagWhereInput[] | undefined;
    OR?: TagWhereInput[] | undefined;
    NOT?: TagWhereInput[] | undefined;
    name?: StringFilter | undefined;
    Post?: PostRelationFilter | undefined;
    postId?: StringNullableFilter | undefined;
}
