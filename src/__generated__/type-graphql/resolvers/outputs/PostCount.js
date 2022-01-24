"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PostCount = class PostCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostCount.prototype, "tags", void 0);
PostCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PostCount", {
        isAbstract: true
    })
], PostCount);
exports.PostCount = PostCount;
