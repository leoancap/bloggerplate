"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Tag = class Tag {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Tag.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Tag.prototype, "postId", void 0);
Tag = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Tag", {
        isAbstract: true
    })
], Tag);
exports.Tag = Tag;
