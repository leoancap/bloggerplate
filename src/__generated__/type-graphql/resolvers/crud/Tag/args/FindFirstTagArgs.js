"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagOrderByWithRelationInput_1 = require("../../../inputs/TagOrderByWithRelationInput");
const TagWhereInput_1 = require("../../../inputs/TagWhereInput");
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
const TagScalarFieldEnum_1 = require("../../../../enums/TagScalarFieldEnum");
let FindFirstTagArgs = class FindFirstTagArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereInput_1.TagWhereInput)
], FindFirstTagArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagOrderByWithRelationInput_1.TagOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstTagArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], FindFirstTagArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstTagArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstTagArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarFieldEnum_1.TagScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstTagArgs.prototype, "distinct", void 0);
FindFirstTagArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstTagArgs);
exports.FindFirstTagArgs = FindFirstTagArgs;
