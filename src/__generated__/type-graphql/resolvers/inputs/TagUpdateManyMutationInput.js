"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TagUpdateManyMutationInput = class TagUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateManyMutationInput.prototype, "name", void 0);
TagUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagUpdateManyMutationInput", {
        isAbstract: true
    })
], TagUpdateManyMutationInput);
exports.TagUpdateManyMutationInput = TagUpdateManyMutationInput;
