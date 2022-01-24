"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const VerificationTokenUpdateInput_1 = require("../../../inputs/VerificationTokenUpdateInput");
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
let UpdateVerificationTokenArgs = class UpdateVerificationTokenArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenUpdateInput_1.VerificationTokenUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenUpdateInput_1.VerificationTokenUpdateInput)
], UpdateVerificationTokenArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput)
], UpdateVerificationTokenArgs.prototype, "where", void 0);
UpdateVerificationTokenArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateVerificationTokenArgs);
exports.UpdateVerificationTokenArgs = UpdateVerificationTokenArgs;
