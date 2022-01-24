"use strict";
var TagScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let TagScalarWhereInput = TagScalarWhereInput_1 = class TagScalarWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], TagScalarWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], TagScalarWhereInput.prototype, "postId", void 0);
TagScalarWhereInput = TagScalarWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagScalarWhereInput", {
        isAbstract: true
    })
], TagScalarWhereInput);
exports.TagScalarWhereInput = TagScalarWhereInput;
