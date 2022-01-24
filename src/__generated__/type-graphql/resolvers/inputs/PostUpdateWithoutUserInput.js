"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TagUpdateManyWithoutPostInput_1 = require("../inputs/TagUpdateManyWithoutPostInput");
let PostUpdateWithoutUserInput = class PostUpdateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutUserInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutUserInput.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutUserInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagUpdateManyWithoutPostInput_1.TagUpdateManyWithoutPostInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagUpdateManyWithoutPostInput_1.TagUpdateManyWithoutPostInput)
], PostUpdateWithoutUserInput.prototype, "tags", void 0);
PostUpdateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpdateWithoutUserInput", {
        isAbstract: true
    })
], PostUpdateWithoutUserInput);
exports.PostUpdateWithoutUserInput = PostUpdateWithoutUserInput;
