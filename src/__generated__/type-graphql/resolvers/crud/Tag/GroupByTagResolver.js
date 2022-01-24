"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTagResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByTagArgs_1 = require("./args/GroupByTagArgs");
const Tag_1 = require("../../../models/Tag");
const TagGroupBy_1 = require("../../outputs/TagGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTagResolver = class GroupByTagResolver {
    async groupByTag(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByTagResolver.prototype, "groupByTag", null);
GroupByTagResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], GroupByTagResolver);
exports.GroupByTagResolver = GroupByTagResolver;
