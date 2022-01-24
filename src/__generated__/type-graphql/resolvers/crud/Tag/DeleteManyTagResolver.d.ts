import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTagArgs } from "./args/DeleteManyTagArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTagResolver {
    deleteManyTag(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTagArgs): Promise<AffectedRowsOutput>;
}
