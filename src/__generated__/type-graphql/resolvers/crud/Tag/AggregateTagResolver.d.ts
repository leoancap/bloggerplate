import { GraphQLResolveInfo } from "graphql";
import { AggregateTagArgs } from "./args/AggregateTagArgs";
import { AggregateTag } from "../../outputs/AggregateTag";
export declare class AggregateTagResolver {
    aggregateTag(ctx: any, info: GraphQLResolveInfo, args: AggregateTagArgs): Promise<AggregateTag>;
}
