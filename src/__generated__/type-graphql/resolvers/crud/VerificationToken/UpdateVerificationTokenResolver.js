"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVerificationTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateVerificationTokenArgs_1 = require("./args/UpdateVerificationTokenArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const helpers_1 = require("../../../helpers");
let UpdateVerificationTokenResolver = class UpdateVerificationTokenResolver {
    async updateVerificationToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => VerificationToken_1.VerificationToken, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateVerificationTokenArgs_1.UpdateVerificationTokenArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateVerificationTokenResolver.prototype, "updateVerificationToken", null);
UpdateVerificationTokenResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => VerificationToken_1.VerificationToken)
], UpdateVerificationTokenResolver);
exports.UpdateVerificationTokenResolver = UpdateVerificationTokenResolver;
