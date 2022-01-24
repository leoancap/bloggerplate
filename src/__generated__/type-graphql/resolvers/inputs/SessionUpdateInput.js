"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSessionsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSessionsInput");
let SessionUpdateInput = class SessionUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SessionUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SessionUpdateInput.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SessionUpdateInput.prototype, "expires", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSessionsInput_1.UserUpdateOneRequiredWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneRequiredWithoutSessionsInput_1.UserUpdateOneRequiredWithoutSessionsInput)
], SessionUpdateInput.prototype, "user", void 0);
SessionUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionUpdateInput", {
        isAbstract: true
    })
], SessionUpdateInput);
exports.SessionUpdateInput = SessionUpdateInput;
