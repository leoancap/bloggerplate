"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagCountOrderByAggregateInput = class TagCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagCountOrderByAggregateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagCountOrderByAggregateInput.prototype, "postId", void 0);
TagCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagCountOrderByAggregateInput", {
        isAbstract: true
    })
], TagCountOrderByAggregateInput);
exports.TagCountOrderByAggregateInput = TagCountOrderByAggregateInput;
