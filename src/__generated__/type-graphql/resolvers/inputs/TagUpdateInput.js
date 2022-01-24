"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostUpdateOneWithoutTagsInput_1 = require("../inputs/PostUpdateOneWithoutTagsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TagUpdateInput = class TagUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateOneWithoutTagsInput_1.PostUpdateOneWithoutTagsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateOneWithoutTagsInput_1.PostUpdateOneWithoutTagsInput)
], TagUpdateInput.prototype, "Post", void 0);
TagUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagUpdateInput", {
        isAbstract: true
    })
], TagUpdateInput);
exports.TagUpdateInput = TagUpdateInput;
