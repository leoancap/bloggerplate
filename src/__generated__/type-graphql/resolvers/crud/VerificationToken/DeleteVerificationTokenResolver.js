"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVerificationTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteVerificationTokenArgs_1 = require("./args/DeleteVerificationTokenArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const helpers_1 = require("../../../helpers");
let DeleteVerificationTokenResolver = class DeleteVerificationTokenResolver {
    async deleteVerificationToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.delete({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteVerificationTokenArgs_1.DeleteVerificationTokenArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteVerificationTokenResolver.prototype, "deleteVerificationToken", null);
DeleteVerificationTokenResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => VerificationToken_1.VerificationToken)
], DeleteVerificationTokenResolver);
exports.DeleteVerificationTokenResolver = DeleteVerificationTokenResolver;
