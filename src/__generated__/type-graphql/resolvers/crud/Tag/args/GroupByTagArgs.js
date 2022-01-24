"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagOrderByWithAggregationInput_1 = require("../../../inputs/TagOrderByWithAggregationInput");
const TagScalarWhereWithAggregatesInput_1 = require("../../../inputs/TagScalarWhereWithAggregatesInput");
const TagWhereInput_1 = require("../../../inputs/TagWhereInput");
const TagScalarFieldEnum_1 = require("../../../../enums/TagScalarFieldEnum");
let GroupByTagArgs = class GroupByTagArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereInput_1.TagWhereInput)
], GroupByTagArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagOrderByWithAggregationInput_1.TagOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByTagArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarFieldEnum_1.TagScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByTagArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagScalarWhereWithAggregatesInput_1.TagScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagScalarWhereWithAggregatesInput_1.TagScalarWhereWithAggregatesInput)
], GroupByTagArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByTagArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByTagArgs.prototype, "skip", void 0);
GroupByTagArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByTagArgs);
exports.GroupByTagArgs = GroupByTagArgs;
