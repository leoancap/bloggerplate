"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountWhereInput_1 = require("../../../inputs/AccountWhereInput");
let DeleteManyAccountArgs = class DeleteManyAccountArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountWhereInput_1.AccountWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AccountWhereInput_1.AccountWhereInput)
], DeleteManyAccountArgs.prototype, "where", void 0);
DeleteManyAccountArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyAccountArgs);
exports.DeleteManyAccountArgs = DeleteManyAccountArgs;
