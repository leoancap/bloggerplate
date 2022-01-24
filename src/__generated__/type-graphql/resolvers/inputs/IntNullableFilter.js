"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
let IntNullableFilter = class IntNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], IntNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], IntNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], IntNullableFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], IntNullableFilter.prototype, "not", void 0);
IntNullableFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("IntNullableFilter", {
        isAbstract: true
    })
], IntNullableFilter);
exports.IntNullableFilter = IntNullableFilter;
