"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateManyAccountArgs_1 = require("./args/UpdateManyAccountArgs");
const Account_1 = require("../../../models/Account");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAccountResolver = class UpdateManyAccountResolver {
    async updateManyAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyAccountArgs_1.UpdateManyAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateManyAccountResolver.prototype, "updateManyAccount", null);
UpdateManyAccountResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], UpdateManyAccountResolver);
exports.UpdateManyAccountResolver = UpdateManyAccountResolver;
