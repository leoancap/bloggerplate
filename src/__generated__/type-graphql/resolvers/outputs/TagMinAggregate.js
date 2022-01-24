"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagMinAggregate = class TagMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagMinAggregate.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagMinAggregate.prototype, "postId", void 0);
TagMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("TagMinAggregate", {
        isAbstract: true
    })
], TagMinAggregate);
exports.TagMinAggregate = TagMinAggregate;
