"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountCreateManyInput_1 = require("../../../inputs/AccountCreateManyInput");
let CreateManyAccountArgs = class CreateManyAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AccountCreateManyInput_1.AccountCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyAccountArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyAccountArgs.prototype, "skipDuplicates", void 0);
CreateManyAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyAccountArgs);
exports.CreateManyAccountArgs = CreateManyAccountArgs;
