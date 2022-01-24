import { GraphQLResolveInfo } from "graphql";
import { DeleteVerificationTokenArgs } from "./args/DeleteVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class DeleteVerificationTokenResolver {
    deleteVerificationToken(ctx: any, info: GraphQLResolveInfo, args: DeleteVerificationTokenArgs): Promise<VerificationToken | null>;
}
