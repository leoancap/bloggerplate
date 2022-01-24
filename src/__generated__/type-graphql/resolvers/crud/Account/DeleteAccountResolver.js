"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteAccountArgs_1 = require("./args/DeleteAccountArgs");
const Account_1 = require("../../../models/Account");
const helpers_1 = require("../../../helpers");
let DeleteAccountResolver = class DeleteAccountResolver {
    async deleteAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteAccountArgs_1.DeleteAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteAccountResolver.prototype, "deleteAccount", null);
DeleteAccountResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], DeleteAccountResolver);
exports.DeleteAccountResolver = DeleteAccountResolver;
