import { GraphQLResolveInfo } from "graphql";
import { CreateTagArgs } from "./args/CreateTagArgs";
import { Tag } from "../../../models/Tag";
export declare class CreateTagResolver {
    createTag(ctx: any, info: GraphQLResolveInfo, args: CreateTagArgs): Promise<Tag>;
}
