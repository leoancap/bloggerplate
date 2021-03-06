"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AccountOrderByRelationAggregateInput = class AccountOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AccountOrderByRelationAggregateInput.prototype, "_count", void 0);
AccountOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountOrderByRelationAggregateInput", {
        isAbstract: true
    })
], AccountOrderByRelationAggregateInput);
exports.AccountOrderByRelationAggregateInput = AccountOrderByRelationAggregateInput;
