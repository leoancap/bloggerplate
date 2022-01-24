"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateWithoutTagsInput_1 = require("../inputs/PostCreateWithoutTagsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutTagsInput = class PostCreateOrConnectWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutTagsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateWithoutTagsInput_1.PostCreateWithoutTagsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateWithoutTagsInput_1.PostCreateWithoutTagsInput)
], PostCreateOrConnectWithoutTagsInput.prototype, "create", void 0);
PostCreateOrConnectWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutTagsInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutTagsInput);
exports.PostCreateOrConnectWithoutTagsInput = PostCreateOrConnectWithoutTagsInput;
