"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateOneWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateOrConnectWithoutTagsInput_1 = require("../inputs/PostCreateOrConnectWithoutTagsInput");
const PostCreateWithoutTagsInput_1 = require("../inputs/PostCreateWithoutTagsInput");
const PostUpdateWithoutTagsInput_1 = require("../inputs/PostUpdateWithoutTagsInput");
const PostUpsertWithoutTagsInput_1 = require("../inputs/PostUpsertWithoutTagsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateOneWithoutTagsInput = class PostUpdateOneWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateWithoutTagsInput_1.PostCreateWithoutTagsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateWithoutTagsInput_1.PostCreateWithoutTagsInput)
], PostUpdateOneWithoutTagsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutTagsInput_1.PostCreateOrConnectWithoutTagsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateOrConnectWithoutTagsInput_1.PostCreateOrConnectWithoutTagsInput)
], PostUpdateOneWithoutTagsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpsertWithoutTagsInput_1.PostUpsertWithoutTagsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostUpsertWithoutTagsInput_1.PostUpsertWithoutTagsInput)
], PostUpdateOneWithoutTagsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostUpdateOneWithoutTagsInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostUpdateOneWithoutTagsInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateOneWithoutTagsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateWithoutTagsInput_1.PostUpdateWithoutTagsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateWithoutTagsInput_1.PostUpdateWithoutTagsInput)
], PostUpdateOneWithoutTagsInput.prototype, "update", void 0);
PostUpdateOneWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpdateOneWithoutTagsInput", {
        isAbstract: true
    })
], PostUpdateOneWithoutTagsInput);
exports.PostUpdateOneWithoutTagsInput = PostUpdateOneWithoutTagsInput;
