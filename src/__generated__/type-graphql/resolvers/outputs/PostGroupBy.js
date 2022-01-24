"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCountAggregate_1 = require("../outputs/PostCountAggregate");
const PostMaxAggregate_1 = require("../outputs/PostMaxAggregate");
const PostMinAggregate_1 = require("../outputs/PostMinAggregate");
let PostGroupBy = class PostGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostGroupBy.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostGroupBy.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCountAggregate_1.PostCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCountAggregate_1.PostCountAggregate)
], PostGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostMinAggregate_1.PostMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostMinAggregate_1.PostMinAggregate)
], PostGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostMaxAggregate_1.PostMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostMaxAggregate_1.PostMaxAggregate)
], PostGroupBy.prototype, "_max", void 0);
PostGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PostGroupBy", {
        isAbstract: true
    })
], PostGroupBy);
exports.PostGroupBy = PostGroupBy;
