import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTagArgs } from "./args/UpdateManyTagArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTagResolver {
    updateManyTag(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTagArgs): Promise<AffectedRowsOutput>;
}
