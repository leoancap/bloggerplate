import { GraphQLResolveInfo } from "graphql";
import { FindManyTagArgs } from "./args/FindManyTagArgs";
import { Tag } from "../../../models/Tag";
export declare class FindManyTagResolver {
    tags(ctx: any, info: GraphQLResolveInfo, args: FindManyTagArgs): Promise<Tag[]>;
}
