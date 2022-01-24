"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagCountAggregate = class TagCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TagCountAggregate.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TagCountAggregate.prototype, "postId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TagCountAggregate.prototype, "_all", void 0);
TagCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TagCountAggregate", {
        isAbstract: true
    })
], TagCountAggregate);
exports.TagCountAggregate = TagCountAggregate;
