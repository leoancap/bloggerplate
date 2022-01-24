"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateNestedManyWithoutPostInput_1 = require("../inputs/TagCreateNestedManyWithoutPostInput");
let PostCreateWithoutUserInput = class PostCreateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateWithoutUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateWithoutUserInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateWithoutUserInput.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostCreateWithoutUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostCreateWithoutUserInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagCreateNestedManyWithoutPostInput_1.TagCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagCreateNestedManyWithoutPostInput_1.TagCreateNestedManyWithoutPostInput)
], PostCreateWithoutUserInput.prototype, "tags", void 0);
PostCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateWithoutUserInput", {
        isAbstract: true
    })
], PostCreateWithoutUserInput);
exports.PostCreateWithoutUserInput = PostCreateWithoutUserInput;
