"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateAccountArgs_1 = require("./args/AggregateAccountArgs");
const CreateAccountArgs_1 = require("./args/CreateAccountArgs");
const CreateManyAccountArgs_1 = require("./args/CreateManyAccountArgs");
const DeleteAccountArgs_1 = require("./args/DeleteAccountArgs");
const DeleteManyAccountArgs_1 = require("./args/DeleteManyAccountArgs");
const FindFirstAccountArgs_1 = require("./args/FindFirstAccountArgs");
const FindManyAccountArgs_1 = require("./args/FindManyAccountArgs");
const FindUniqueAccountArgs_1 = require("./args/FindUniqueAccountArgs");
const GroupByAccountArgs_1 = require("./args/GroupByAccountArgs");
const UpdateAccountArgs_1 = require("./args/UpdateAccountArgs");
const UpdateManyAccountArgs_1 = require("./args/UpdateManyAccountArgs");
const UpsertAccountArgs_1 = require("./args/UpsertAccountArgs");
const helpers_1 = require("../../../helpers");
const Account_1 = require("../../../models/Account");
const AccountGroupBy_1 = require("../../outputs/AccountGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAccount_1 = require("../../outputs/AggregateAccount");
let AccountCrudResolver = class AccountCrudResolver {
    async account(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async accounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAccount(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).account.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAccount(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Account_1.Account, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueAccountArgs_1.FindUniqueAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountCrudResolver.prototype, "account", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Account_1.Account, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstAccountArgs_1.FindFirstAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountCrudResolver.prototype, "findFirstAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Account_1.Account], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyAccountArgs_1.FindManyAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountCrudResolver.prototype, "accounts", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateAccountArgs_1.CreateAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountCrudResolver.prototype, "createAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyAccountArgs_1.CreateManyAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountCrudResolver.prototype, "createManyAccount", null);
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
], AccountCrudResolver.prototype, "deleteAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateAccountArgs_1.UpdateAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountCrudResolver.prototype, "updateAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyAccountArgs_1.DeleteManyAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountCrudResolver.prototype, "deleteManyAccount", null);
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
], AccountCrudResolver.prototype, "updateManyAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertAccountArgs_1.UpsertAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountCrudResolver.prototype, "upsertAccount", null);
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
], AccountCrudResolver.prototype, "aggregateAccount", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [AccountGroupBy_1.AccountGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByAccountArgs_1.GroupByAccountArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AccountCrudResolver.prototype, "groupByAccount", null);
AccountCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], AccountCrudResolver);
exports.AccountCrudResolver = AccountCrudResolver;
