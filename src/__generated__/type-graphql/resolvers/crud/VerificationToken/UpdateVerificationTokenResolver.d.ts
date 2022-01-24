import { GraphQLResolveInfo } from "graphql";
import { UpdateVerificationTokenArgs } from "./args/UpdateVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class UpdateVerificationTokenResolver {
    updateVerificationToken(ctx: any, info: GraphQLResolveInfo, args: UpdateVerificationTokenArgs): Promise<VerificationToken | null>;
}
