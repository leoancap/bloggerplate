import { GraphQLResolveInfo } from "graphql";
import { DeleteTagArgs } from "./args/DeleteTagArgs";
import { Tag } from "../../../models/Tag";
export declare class DeleteTagResolver {
    deleteTag(ctx: any, info: GraphQLResolveInfo, args: DeleteTagArgs): Promise<Tag | null>;
}
