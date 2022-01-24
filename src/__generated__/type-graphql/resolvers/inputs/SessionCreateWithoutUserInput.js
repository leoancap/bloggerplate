"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SessionCreateWithoutUserInput = class SessionCreateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionCreateWithoutUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionCreateWithoutUserInput.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SessionCreateWithoutUserInput.prototype, "expires", void 0);
SessionCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionCreateWithoutUserInput", {
        isAbstract: true
    })
], SessionCreateWithoutUserInput);
exports.SessionCreateWithoutUserInput = SessionCreateWithoutUserInput;
