"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountUpdateInput_1 = require("../../../inputs/AccountUpdateInput");
const AccountWhereUniqueInput_1 = require("../../../inputs/AccountWhereUniqueInput");
let UpdateAccountArgs = class UpdateAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateInput_1.AccountUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateInput_1.AccountUpdateInput)
], UpdateAccountArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], UpdateAccountArgs.prototype, "where", void 0);
UpdateAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateAccountArgs);
exports.UpdateAccountArgs = UpdateAccountArgs;
