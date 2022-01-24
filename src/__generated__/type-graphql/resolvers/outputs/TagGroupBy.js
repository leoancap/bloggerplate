"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCountAggregate_1 = require("../outputs/TagCountAggregate");
const TagMaxAggregate_1 = require("../outputs/TagMaxAggregate");
const TagMinAggregate_1 = require("../outputs/TagMinAggregate");
let TagGroupBy = class TagGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagGroupBy.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagGroupBy.prototype, "postId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagCountAggregate_1.TagCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagCountAggregate_1.TagCountAggregate)
], TagGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagMinAggregate_1.TagMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagMinAggregate_1.TagMinAggregate)
], TagGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagMaxAggregate_1.TagMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagMaxAggregate_1.TagMaxAggregate)
], TagGroupBy.prototype, "_max", void 0);
TagGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TagGroupBy", {
        isAbstract: true
    })
], TagGroupBy);
exports.TagGroupBy = TagGroupBy;
