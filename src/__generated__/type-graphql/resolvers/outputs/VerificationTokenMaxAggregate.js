"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let VerificationTokenMaxAggregate = class VerificationTokenMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], VerificationTokenMaxAggregate.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], VerificationTokenMaxAggregate.prototype, "token", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], VerificationTokenMaxAggregate.prototype, "expires", void 0);
VerificationTokenMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("VerificationTokenMaxAggregate", {
        isAbstract: true
    })
], VerificationTokenMaxAggregate);
exports.VerificationTokenMaxAggregate = VerificationTokenMaxAggregate;
