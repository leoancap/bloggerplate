"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let VerificationTokenCreateInput = class VerificationTokenCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], VerificationTokenCreateInput.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], VerificationTokenCreateInput.prototype, "token", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], VerificationTokenCreateInput.prototype, "expires", void 0);
VerificationTokenCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("VerificationTokenCreateInput", {
        isAbstract: true
    })
], VerificationTokenCreateInput);
exports.VerificationTokenCreateInput = VerificationTokenCreateInput;
