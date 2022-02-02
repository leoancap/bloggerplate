"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UserCountAggregate = class UserCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCountAggregate.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCountAggregate.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCountAggregate.prototype, "emailVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCountAggregate.prototype, "image", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserCountAggregate.prototype, "_all", void 0);
UserCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("UserCountAggregate", {
        isAbstract: true
    })
], UserCountAggregate);
exports.UserCountAggregate = UserCountAggregate;
