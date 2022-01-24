"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SessionMinOrderByAggregateInput = class SessionMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionMinOrderByAggregateInput.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionMinOrderByAggregateInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SessionMinOrderByAggregateInput.prototype, "expires", void 0);
SessionMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionMinOrderByAggregateInput", {
        isAbstract: true
    })
], SessionMinOrderByAggregateInput);
exports.SessionMinOrderByAggregateInput = SessionMinOrderByAggregateInput;
