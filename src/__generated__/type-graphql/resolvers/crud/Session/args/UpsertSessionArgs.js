"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionCreateInput_1 = require("../../../inputs/SessionCreateInput");
const SessionUpdateInput_1 = require("../../../inputs/SessionUpdateInput");
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
let UpsertSessionArgs = class UpsertSessionArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], UpsertSessionArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionCreateInput_1.SessionCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionCreateInput_1.SessionCreateInput)
], UpsertSessionArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateInput_1.SessionUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateInput_1.SessionUpdateInput)
], UpsertSessionArgs.prototype, "update", void 0);
UpsertSessionArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertSessionArgs);
exports.UpsertSessionArgs = UpsertSessionArgs;
