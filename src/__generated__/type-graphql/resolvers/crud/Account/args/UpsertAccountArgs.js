"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateInput_1 = require("../../../inputs/AccountCreateInput");
const AccountUpdateInput_1 = require("../../../inputs/AccountUpdateInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
let UpsertAccountArgs = class UpsertAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], UpsertAccountArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateInput_1.AccountCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateInput_1.AccountCreateInput)
], UpsertAccountArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateInput_1.AccountUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateInput_1.AccountUpdateInput)
], UpsertAccountArgs.prototype, "update", void 0);
UpsertAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertAccountArgs);
exports.UpsertAccountArgs = UpsertAccountArgs;
