"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateNestedManyWithoutPostInput_1 = require("../inputs/TagCreateNestedManyWithoutPostInput");
const UserCreateNestedOneWithoutProjectsInput_1 = require("../inputs/UserCreateNestedOneWithoutProjectsInput");
let PostCreateInput = class PostCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateInput.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagCreateNestedManyWithoutPostInput_1.TagCreateNestedManyWithoutPostInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagCreateNestedManyWithoutPostInput_1.TagCreateNestedManyWithoutPostInput)
], PostCreateInput.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProjectsInput_1.UserCreateNestedOneWithoutProjectsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutProjectsInput_1.UserCreateNestedOneWithoutProjectsInput)
], PostCreateInput.prototype, "user", void 0);
PostCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateInput", {
        isAbstract: true
    })
], PostCreateInput);
exports.PostCreateInput = PostCreateInput;
