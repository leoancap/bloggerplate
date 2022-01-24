import { TagOrderByWithRelationInput } from "../../../inputs/TagOrderByWithRelationInput";
import { TagWhereInput } from "../../../inputs/TagWhereInput";
import { TagWhereUniqueInput } from "../../../inputs/TagWhereUniqueInput";
export declare class AggregateTagArgs {
    where?: TagWhereInput | undefined;
    orderBy?: TagOrderByWithRelationInput[] | undefined;
    cursor?: TagWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
