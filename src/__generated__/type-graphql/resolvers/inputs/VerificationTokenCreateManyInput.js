"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let VerificationTokenCreateManyInput = class VerificationTokenCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], VerificationTokenCreateManyInput.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], VerificationTokenCreateManyInput.prototype, "token", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], VerificationTokenCreateManyInput.prototype, "expires", void 0);
VerificationTokenCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("VerificationTokenCreateManyInput", {
        isAbstract: true
    })
], VerificationTokenCreateManyInput);
exports.VerificationTokenCreateManyInput = VerificationTokenCreateManyInput;
