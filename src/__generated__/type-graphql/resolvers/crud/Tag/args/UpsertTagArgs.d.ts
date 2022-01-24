import { TagCreateInput } from "../../../inputs/TagCreateInput";
import { TagUpdateInput } from "../../../inputs/TagUpdateInput";
import { TagWhereUniqueInput } from "../../../inputs/TagWhereUniqueInput";
export declare class UpsertTagArgs {
    where: TagWhereUniqueInput;
    create: TagCreateInput;
    update: TagUpdateInput;
}
