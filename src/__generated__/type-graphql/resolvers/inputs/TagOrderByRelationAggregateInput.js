"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagOrderByRelationAggregateInput = class TagOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagOrderByRelationAggregateInput.prototype, "_count", void 0);
TagOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagOrderByRelationAggregateInput", {
        isAbstract: true
    })
], TagOrderByRelationAggregateInput);
exports.TagOrderByRelationAggregateInput = TagOrderByRelationAggregateInput;
