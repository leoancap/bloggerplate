"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateManyPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagCreateManyPostInput = class TagCreateManyPostInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagCreateManyPostInput.prototype, "name", void 0);
TagCreateManyPostInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagCreateManyPostInput", {
        isAbstract: true
    })
], TagCreateManyPostInput);
exports.TagCreateManyPostInput = TagCreateManyPostInput;
