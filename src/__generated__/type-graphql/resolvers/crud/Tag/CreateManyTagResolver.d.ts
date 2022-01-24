import { GraphQLResolveInfo } from "graphql";
import { CreateManyTagArgs } from "./args/CreateManyTagArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTagResolver {
    createManyTag(ctx: any, info: GraphQLResolveInfo, args: CreateManyTagArgs): Promise<AffectedRowsOutput>;
}
