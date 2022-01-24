"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedOneWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateOrConnectWithoutTagsInput_1 = require("../inputs/PostCreateOrConnectWithoutTagsInput");
const PostCreateWithoutTagsInput_1 = require("../inputs/PostCreateWithoutTagsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedOneWithoutTagsInput = class PostCreateNestedOneWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateWithoutTagsInput_1.PostCreateWithoutTagsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateWithoutTagsInput_1.PostCreateWithoutTagsInput)
], PostCreateNestedOneWithoutTagsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutTagsInput_1.PostCreateOrConnectWithoutTagsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateOrConnectWithoutTagsInput_1.PostCreateOrConnectWithoutTagsInput)
], PostCreateNestedOneWithoutTagsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateNestedOneWithoutTagsInput.prototype, "connect", void 0);
PostCreateNestedOneWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateNestedOneWithoutTagsInput", {
        isAbstract: true
    })
], PostCreateNestedOneWithoutTagsInput);
exports.PostCreateNestedOneWithoutTagsInput = PostCreateNestedOneWithoutTagsInput;
