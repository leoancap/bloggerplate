"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateTagArgs_1 = require("./args/AggregateTagArgs");
const CreateManyTagArgs_1 = require("./args/CreateManyTagArgs");
const CreateTagArgs_1 = require("./args/CreateTagArgs");
const DeleteManyTagArgs_1 = require("./args/DeleteManyTagArgs");
const DeleteTagArgs_1 = require("./args/DeleteTagArgs");
const FindFirstTagArgs_1 = require("./args/FindFirstTagArgs");
const FindManyTagArgs_1 = require("./args/FindManyTagArgs");
const FindUniqueTagArgs_1 = require("./args/FindUniqueTagArgs");
const GroupByTagArgs_1 = require("./args/GroupByTagArgs");
const UpdateManyTagArgs_1 = require("./args/UpdateManyTagArgs");
const UpdateTagArgs_1 = require("./args/UpdateTagArgs");
const UpsertTagArgs_1 = require("./args/UpsertTagArgs");
const helpers_1 = require("../../../helpers");
const Tag_1 = require("../../../models/Tag");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTag_1 = require("../../outputs/AggregateTag");
const TagGroupBy_1 = require("../../outputs/TagGroupBy");
let TagCrudResolver = class TagCrudResolver {
    async tag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTag(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTag(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Tag_1.Tag, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueTagArgs_1.FindUniqueTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "tag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Tag_1.Tag, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstTagArgs_1.FindFirstTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "findFirstTag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Tag_1.Tag], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyTagArgs_1.FindManyTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "tags", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateTagArgs_1.CreateTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "createTag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyTagArgs_1.CreateManyTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "createManyTag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteTagArgs_1.DeleteTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "deleteTag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateTagArgs_1.UpdateTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "updateTag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyTagArgs_1.DeleteManyTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "deleteManyTag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyTagArgs_1.UpdateManyTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "updateManyTag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertTagArgs_1.UpsertTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "upsertTag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateTag_1.AggregateTag, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateTagArgs_1.AggregateTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "aggregateTag", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [TagGroupBy_1.TagGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByTagArgs_1.GroupByTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagCrudResolver.prototype, "groupByTag", null);
TagCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], TagCrudResolver);
exports.TagCrudResolver = TagCrudResolver;
