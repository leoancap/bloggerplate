"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserCountOrderByAggregateInput = class UserCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCountOrderByAggregateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCountOrderByAggregateInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCountOrderByAggregateInput.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCountOrderByAggregateInput.prototype, "image", void 0);
UserCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCountOrderByAggregateInput", {
        isAbstract: true
    })
], UserCountOrderByAggregateInput);
exports.UserCountOrderByAggregateInput = UserCountOrderByAggregateInput;
