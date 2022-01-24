"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateSessionArgs_1 = require("./args/AggregateSessionArgs");
const CreateManySessionArgs_1 = require("./args/CreateManySessionArgs");
const CreateSessionArgs_1 = require("./args/CreateSessionArgs");
const DeleteManySessionArgs_1 = require("./args/DeleteManySessionArgs");
const DeleteSessionArgs_1 = require("./args/DeleteSessionArgs");
const FindFirstSessionArgs_1 = require("./args/FindFirstSessionArgs");
const FindManySessionArgs_1 = require("./args/FindManySessionArgs");
const FindUniqueSessionArgs_1 = require("./args/FindUniqueSessionArgs");
const GroupBySessionArgs_1 = require("./args/GroupBySessionArgs");
const UpdateManySessionArgs_1 = require("./args/UpdateManySessionArgs");
const UpdateSessionArgs_1 = require("./args/UpdateSessionArgs");
const UpsertSessionArgs_1 = require("./args/UpsertSessionArgs");
const helpers_1 = require("../../../helpers");
const Session_1 = require("../../../models/Session");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSession_1 = require("../../outputs/AggregateSession");
const SessionGroupBy_1 = require("../../outputs/SessionGroupBy");
let SessionCrudResolver = class SessionCrudResolver {
    async session(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async sessions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSession(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).session.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySession(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Session_1.Session, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueSessionArgs_1.FindUniqueSessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "session", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Session_1.Session, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstSessionArgs_1.FindFirstSessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "findFirstSession", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Session_1.Session], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManySessionArgs_1.FindManySessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "sessions", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateSessionArgs_1.CreateSessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "createSession", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManySessionArgs_1.CreateManySessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "createManySession", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteSessionArgs_1.DeleteSessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "deleteSession", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateSessionArgs_1.UpdateSessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "updateSession", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManySessionArgs_1.DeleteManySessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "deleteManySession", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManySessionArgs_1.UpdateManySessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "updateManySession", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertSessionArgs_1.UpsertSessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "upsertSession", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateSession_1.AggregateSession, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateSessionArgs_1.AggregateSessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "aggregateSession", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [SessionGroupBy_1.SessionGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupBySessionArgs_1.GroupBySessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionCrudResolver.prototype, "groupBySession", null);
SessionCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], SessionCrudResolver);
exports.SessionCrudResolver = SessionCrudResolver;
