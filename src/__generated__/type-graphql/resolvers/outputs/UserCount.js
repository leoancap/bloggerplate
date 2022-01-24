"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UserCount = class UserCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCount.prototype, "accounts", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCount.prototype, "sessions", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCount.prototype, "projects", void 0);
UserCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("UserCount", {
        isAbstract: true
    })
], UserCount);
exports.UserCount = UserCount;
