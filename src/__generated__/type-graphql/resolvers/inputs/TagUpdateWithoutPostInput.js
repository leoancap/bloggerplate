"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TagUpdateWithoutPostInput = class TagUpdateWithoutPostInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateWithoutPostInput.prototype, "name", void 0);
TagUpdateWithoutPostInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagUpdateWithoutPostInput", {
        isAbstract: true
    })
], TagUpdateWithoutPostInput);
exports.TagUpdateWithoutPostInput = TagUpdateWithoutPostInput;
