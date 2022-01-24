import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TagListRelationFilter } from "../inputs/TagListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    body?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    tags?: TagListRelationFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
}
