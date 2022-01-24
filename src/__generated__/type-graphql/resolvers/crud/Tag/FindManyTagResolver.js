"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTagResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyTagArgs_1 = require("./args/FindManyTagArgs");
const Tag_1 = require("../../../models/Tag");
const helpers_1 = require("../../../helpers");
let FindManyTagResolver = class FindManyTagResolver {
    async tags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyTagResolver.prototype, "tags", null);
FindManyTagResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], FindManyTagResolver);
exports.FindManyTagResolver = FindManyTagResolver;
