"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const VerificationTokenCreateInput_1 = require("../../../inputs/VerificationTokenCreateInput");
let CreateVerificationTokenArgs = class CreateVerificationTokenArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenCreateInput_1.VerificationTokenCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenCreateInput_1.VerificationTokenCreateInput)
], CreateVerificationTokenArgs.prototype, "data", void 0);
CreateVerificationTokenArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateVerificationTokenArgs);
exports.CreateVerificationTokenArgs = CreateVerificationTokenArgs;
