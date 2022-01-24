import { GraphQLResolveInfo } from "graphql";
import { GroupByTagArgs } from "./args/GroupByTagArgs";
import { TagGroupBy } from "../../outputs/TagGroupBy";
export declare class GroupByTagResolver {
    groupByTag(ctx: any, info: GraphQLResolveInfo, args: GroupByTagArgs): Promise<TagGroupBy[]>;
}
