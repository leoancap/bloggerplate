"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateInput_1 = require("../../../inputs/AccountCreateInput");
let CreateAccountArgs = class CreateAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountCreateInput_1.AccountCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountCreateInput_1.AccountCreateInput)
], CreateAccountArgs.prototype, "data", void 0);
CreateAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateAccountArgs);
exports.CreateAccountArgs = CreateAccountArgs;
