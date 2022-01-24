"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateNestedOneWithoutProjectsInput_1 = require("../inputs/UserCreateNestedOneWithoutProjectsInput");
let PostCreateWithoutTagsInput = class PostCreateWithoutTagsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateWithoutTagsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateWithoutTagsInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateWithoutTagsInput.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostCreateWithoutTagsInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostCreateWithoutTagsInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProjectsInput_1.UserCreateNestedOneWithoutProjectsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutProjectsInput_1.UserCreateNestedOneWithoutProjectsInput)
], PostCreateWithoutTagsInput.prototype, "user", void 0);
PostCreateWithoutTagsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateWithoutTagsInput", {
        isAbstract: true
    })
], PostCreateWithoutTagsInput);
exports.PostCreateWithoutTagsInput = PostCreateWithoutTagsInput;
