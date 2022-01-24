"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyVerificationTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const VerificationTokenWhereInput_1 = require("../../../inputs/VerificationTokenWhereInput");
let DeleteManyVerificationTokenArgs = class DeleteManyVerificationTokenArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => VerificationTokenWhereInput_1.VerificationTokenWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", VerificationTokenWhereInput_1.VerificationTokenWhereInput)
], DeleteManyVerificationTokenArgs.prototype, "where", void 0);
DeleteManyVerificationTokenArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyVerificationTokenArgs);
exports.DeleteManyVerificationTokenArgs = DeleteManyVerificationTokenArgs;
