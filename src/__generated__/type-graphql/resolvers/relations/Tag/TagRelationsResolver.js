"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Post_1 = require("../../../models/Post");
const Tag_1 = require("../../../models/Tag");
const helpers_1 = require("../../../helpers");
let TagRelationsResolver = class TagRelationsResolver {
    async Post(tag, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findUnique({
            where: {
                name: tag.name,
            },
        }).Post({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Post_1.Post, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Tag_1.Tag, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], TagRelationsResolver.prototype, "Post", null);
TagRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], TagRelationsResolver);
exports.TagRelationsResolver = TagRelationsResolver;
