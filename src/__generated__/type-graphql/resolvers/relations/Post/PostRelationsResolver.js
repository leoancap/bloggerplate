"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Post_1 = require("../../../models/Post");
const Tag_1 = require("../../../models/Tag");
const User_1 = require("../../../models/User");
const PostTagsArgs_1 = require("./args/PostTagsArgs");
const helpers_1 = require("../../../helpers");
let PostRelationsResolver = class PostRelationsResolver {
    async tags(post, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).tags(args);
    }
    async user(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).user({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Tag_1.Tag], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Post_1.Post, Object, PostTagsArgs_1.PostTagsArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostRelationsResolver.prototype, "tags", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Post_1.Post, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostRelationsResolver.prototype, "user", null);
PostRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostRelationsResolver);
exports.PostRelationsResolver = PostRelationsResolver;
