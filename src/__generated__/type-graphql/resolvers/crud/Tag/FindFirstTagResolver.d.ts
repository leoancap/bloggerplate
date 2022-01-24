import { GraphQLResolveInfo } from "graphql";
import { FindFirstTagArgs } from "./args/FindFirstTagArgs";
import { Tag } from "../../../models/Tag";
export declare class FindFirstTagResolver {
    findFirstTag(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagArgs): Promise<Tag | null>;
}
