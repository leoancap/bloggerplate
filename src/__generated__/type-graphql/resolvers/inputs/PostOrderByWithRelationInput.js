"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagOrderByRelationAggregateInput_1 = require("../inputs/TagOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PostOrderByWithRelationInput = class PostOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithRelationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithRelationInput.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithRelationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagOrderByRelationAggregateInput_1.TagOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagOrderByRelationAggregateInput_1.TagOrderByRelationAggregateInput)
], PostOrderByWithRelationInput.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], PostOrderByWithRelationInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostOrderByWithRelationInput.prototype, "userId", void 0);
PostOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostOrderByWithRelationInput", {
        isAbstract: true
    })
], PostOrderByWithRelationInput);
exports.PostOrderByWithRelationInput = PostOrderByWithRelationInput;
