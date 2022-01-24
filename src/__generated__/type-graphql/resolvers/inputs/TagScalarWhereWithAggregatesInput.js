"use strict";
var TagScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let TagScalarWhereWithAggregatesInput = TagScalarWhereWithAggregatesInput_1 = class TagScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TagScalarWhereWithAggregatesInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], TagScalarWhereWithAggregatesInput.prototype, "postId", void 0);
TagScalarWhereWithAggregatesInput = TagScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], TagScalarWhereWithAggregatesInput);
exports.TagScalarWhereWithAggregatesInput = TagScalarWhereWithAggregatesInput;
