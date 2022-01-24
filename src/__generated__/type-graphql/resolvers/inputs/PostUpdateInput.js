"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TagUpdateManyWithoutPostInput_1 = require("../inputs/TagUpdateManyWithoutPostInput");
const UserUpdateOneRequiredWithoutProjectsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutProjectsInput");
let PostUpdateInput = class PostUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagUpdateManyWithoutPostInput_1.TagUpdateManyWithoutPostInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagUpdateManyWithoutPostInput_1.TagUpdateManyWithoutPostInput)
], PostUpdateInput.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProjectsInput_1.UserUpdateOneRequiredWithoutProjectsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneRequiredWithoutProjectsInput_1.UserUpdateOneRequiredWithoutProjectsInput)
], PostUpdateInput.prototype, "user", void 0);
PostUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpdateInput", {
        isAbstract: true
    })
], PostUpdateInput);
exports.PostUpdateInput = PostUpdateInput;
