import { GraphQLResolveInfo } from "graphql";
import { UpdateTagArgs } from "./args/UpdateTagArgs";
import { Tag } from "../../../models/Tag";
export declare class UpdateTagResolver {
    updateTag(ctx: any, info: GraphQLResolveInfo, args: UpdateTagArgs): Promise<Tag | null>;
}
