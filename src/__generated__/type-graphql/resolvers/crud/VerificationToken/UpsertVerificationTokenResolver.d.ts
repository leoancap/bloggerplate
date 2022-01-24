import { GraphQLResolveInfo } from "graphql";
import { UpsertVerificationTokenArgs } from "./args/UpsertVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class UpsertVerificationTokenResolver {
    upsertVerificationToken(ctx: any, info: GraphQLResolveInfo, args: UpsertVerificationTokenArgs): Promise<VerificationToken>;
}
