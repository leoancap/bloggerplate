"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountProviderProviderAccountIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AccountProviderProviderAccountIdCompoundUniqueInput = class AccountProviderProviderAccountIdCompoundUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountProviderProviderAccountIdCompoundUniqueInput.prototype, "provider", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountProviderProviderAccountIdCompoundUniqueInput.prototype, "providerAccountId", void 0);
AccountProviderProviderAccountIdCompoundUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountProviderProviderAccountIdCompoundUniqueInput", {
        isAbstract: true
    })
], AccountProviderProviderAccountIdCompoundUniqueInput);
exports.AccountProviderProviderAccountIdCompoundUniqueInput = AccountProviderProviderAccountIdCompoundUniqueInput;
