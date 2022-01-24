"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
let FindUniqueVerificationTokenArgs = class FindUniqueVerificationTokenArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput)
], FindUniqueVerificationTokenArgs.prototype, "where", void 0);
FindUniqueVerificationTokenArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueVerificationTokenArgs);
exports.FindUniqueVerificationTokenArgs = FindUniqueVerificationTokenArgs;
