"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
let DeleteVerificationTokenArgs = class DeleteVerificationTokenArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput)
], DeleteVerificationTokenArgs.prototype, "where", void 0);
DeleteVerificationTokenArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteVerificationTokenArgs);
exports.DeleteVerificationTokenArgs = DeleteVerificationTokenArgs;
