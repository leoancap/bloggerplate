import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PostScalarWhereInput {
    AND?: PostScalarWhereInput[] | undefined;
    OR?: PostScalarWhereInput[] | undefined;
    NOT?: PostScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    body?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: StringFilter | undefined;
}
