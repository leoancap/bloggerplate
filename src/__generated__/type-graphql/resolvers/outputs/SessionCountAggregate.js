"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let SessionCountAggregate = class SessionCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SessionCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SessionCountAggregate.prototype, "sessionToken", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SessionCountAggregate.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SessionCountAggregate.prototype, "expires", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SessionCountAggregate.prototype, "_all", void 0);
SessionCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("SessionCountAggregate", {
        isAbstract: true
    })
], SessionCountAggregate);
exports.SessionCountAggregate = SessionCountAggregate;
