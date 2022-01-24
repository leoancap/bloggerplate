"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateWithoutTagsInput_1 = require("../inputs/PostCreateWithoutTagsInput");
const PostUpdateWithoutTagsInput_1 = require("../inputs/PostUpdateWithoutTagsInput");
let PostUpsertWithoutTagsInput = class PostUpsertWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateWithoutTagsInput_1.PostUpdateWithoutTagsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateWithoutTagsInput_1.PostUpdateWithoutTagsInput)
], PostUpsertWithoutTagsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateWithoutTagsInput_1.PostCreateWithoutTagsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateWithoutTagsInput_1.PostCreateWithoutTagsInput)
], PostUpsertWithoutTagsInput.prototype, "create", void 0);
PostUpsertWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpsertWithoutTagsInput", {
        isAbstract: true
    })
], PostUpsertWithoutTagsInput);
exports.PostUpsertWithoutTagsInput = PostUpsertWithoutTagsInput;
