import { GraphQLResolveInfo } from "graphql";
import { CreateVerificationTokenArgs } from "./args/CreateVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
export declare class CreateVerificationTokenResolver {
    createVerificationToken(ctx: any, info: GraphQLResolveInfo, args: CreateVerificationTokenArgs): Promise<VerificationToken>;
}
