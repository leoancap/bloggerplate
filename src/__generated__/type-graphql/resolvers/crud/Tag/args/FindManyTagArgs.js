"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagOrderByWithRelationInput_1 = require("../../../inputs/TagOrderByWithRelationInput");
const TagWhereInput_1 = require("../../../inputs/TagWhereInput");
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
const TagScalarFieldEnum_1 = require("../../../../enums/TagScalarFieldEnum");
let FindManyTagArgs = class FindManyTagArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereInput_1.TagWhereInput)
], FindManyTagArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagOrderByWithRelationInput_1.TagOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyTagArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], FindManyTagArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyTagArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyTagArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarFieldEnum_1.TagScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyTagArgs.prototype, "distinct", void 0);
FindManyTagArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyTagArgs);
exports.FindManyTagArgs = FindManyTagArgs;
