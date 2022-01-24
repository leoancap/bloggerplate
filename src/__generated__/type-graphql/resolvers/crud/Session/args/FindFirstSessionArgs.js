"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionOrderByWithRelationInput_1 = require("../../../inputs/SessionOrderByWithRelationInput");
const SessionWhereInput_1 = require("../../../inputs/SessionWhereInput");
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
const SessionScalarFieldEnum_1 = require("../../../../enums/SessionScalarFieldEnum");
let FindFirstSessionArgs = class FindFirstSessionArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereInput_1.SessionWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereInput_1.SessionWhereInput)
], FindFirstSessionArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionOrderByWithRelationInput_1.SessionOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstSessionArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], FindFirstSessionArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstSessionArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstSessionArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionScalarFieldEnum_1.SessionScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstSessionArgs.prototype, "distinct", void 0);
FindFirstSessionArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstSessionArgs);
exports.FindFirstSessionArgs = FindFirstSessionArgs;
