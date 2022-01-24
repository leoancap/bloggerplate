import { GraphQLResolveInfo } from "graphql";
import { UpsertTagArgs } from "./args/UpsertTagArgs";
import { Tag } from "../../../models/Tag";
export declare class UpsertTagResolver {
    upsertTag(ctx: any, info: GraphQLResolveInfo, args: UpsertTagArgs): Promise<Tag>;
}
