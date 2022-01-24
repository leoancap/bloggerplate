import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TagScalarWhereInput {
    AND?: TagScalarWhereInput[] | undefined;
    OR?: TagScalarWhereInput[] | undefined;
    NOT?: TagScalarWhereInput[] | undefined;
    name?: StringFilter | undefined;
    postId?: StringNullableFilter | undefined;
}
