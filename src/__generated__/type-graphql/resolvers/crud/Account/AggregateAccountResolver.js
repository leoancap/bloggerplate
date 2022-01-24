"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateAccountArgs_1 = require("./args/AggregateAccountArgs");
const Account_1 = require("../../../models/Account");
const AggregateAccount_1 = require("../../outputs/AggregateAccount");
const helpers_1 = require("../../../helpers");
let AggregateAccountResolver = class AggregateAccountResolver {
    async aggregateAccount(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).account.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateAccount_1.AggregateAccount, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateAccountArgs_1.AggregateAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateAccountResolver.prototype, "aggregateAccount", null);
AggregateAccountResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], AggregateAccountResolver);
exports.AggregateAccountResolver = AggregateAccountResolver;
