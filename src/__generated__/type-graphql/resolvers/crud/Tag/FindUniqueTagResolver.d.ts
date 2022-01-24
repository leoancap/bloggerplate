import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagArgs } from "./args/FindUniqueTagArgs";
import { Tag } from "../../../models/Tag";
export declare class FindUniqueTagResolver {
    tag(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagArgs): Promise<Tag | null>;
}
