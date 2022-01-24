"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateManyUserInput_1 = require("../inputs/AccountCreateManyUserInput");
let AccountCreateManyUserInputEnvelope = class AccountCreateManyUserInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateManyUserInput_1.AccountCreateManyUserInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AccountCreateManyUserInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AccountCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
AccountCreateManyUserInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], AccountCreateManyUserInputEnvelope);
exports.AccountCreateManyUserInputEnvelope = AccountCreateManyUserInputEnvelope;
