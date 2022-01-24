import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PostScalarWhereWithAggregatesInput {
    AND?: PostScalarWhereWithAggregatesInput[] | undefined;
    OR?: PostScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PostScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    body?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}
