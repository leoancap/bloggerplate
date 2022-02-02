"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePostResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregatePostArgs_1 = require("./args/AggregatePostArgs");
const Post_1 = require("../../../models/Post");
const AggregatePost_1 = require("../../outputs/AggregatePost");
const helpers_1 = require("../../../helpers");
let AggregatePostResolver = class AggregatePostResolver {
    async aggregatePost(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregatePost_1.AggregatePost, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregatePostArgs_1.AggregatePostArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregatePostResolver.prototype, "aggregatePost", null);
AggregatePostResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], AggregatePostResolver);
exports.AggregatePostResolver = AggregatePostResolver;
