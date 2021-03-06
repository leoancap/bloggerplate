"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagMaxAggregate = class TagMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagMaxAggregate.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagMaxAggregate.prototype, "postId", void 0);
TagMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TagMaxAggregate", {
        isAbstract: true
    })
], TagMaxAggregate);
exports.TagMaxAggregate = TagMaxAggregate;
