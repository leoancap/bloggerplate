"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const VerificationTokenCreateInput_1 = require("../../../inputs/VerificationTokenCreateInput");
const VerificationTokenUpdateInput_1 = require("../../../inputs/VerificationTokenUpdateInput");
const VerificationTokenWhereUniqueInput_1 = require("../../../inputs/VerificationTokenWhereUniqueInput");
let UpsertVerificationTokenArgs = class UpsertVerificationTokenArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenWhereUniqueInput_1.VerificationTokenWhereUniqueInput)
], UpsertVerificationTokenArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenCreateInput_1.VerificationTokenCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenCreateInput_1.VerificationTokenCreateInput)
], UpsertVerificationTokenArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenUpdateInput_1.VerificationTokenUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenUpdateInput_1.VerificationTokenUpdateInput)
], UpsertVerificationTokenArgs.prototype, "update", void 0);
UpsertVerificationTokenArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertVerificationTokenArgs);
exports.UpsertVerificationTokenArgs = UpsertVerificationTokenArgs;
