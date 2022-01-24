"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateNestedOneWithoutTagsInput_1 = require("../inputs/PostCreateNestedOneWithoutTagsInput");
let TagCreateInput = class TagCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutTagsInput_1.PostCreateNestedOneWithoutTagsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateNestedOneWithoutTagsInput_1.PostCreateNestedOneWithoutTagsInput)
], TagCreateInput.prototype, "Post", void 0);
TagCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagCreateInput", {
        isAbstract: true
    })
], TagCreateInput);
exports.TagCreateInput = TagCreateInput;
