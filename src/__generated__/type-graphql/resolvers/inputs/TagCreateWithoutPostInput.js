"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagCreateWithoutPostInput = class TagCreateWithoutPostInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagCreateWithoutPostInput.prototype, "name", void 0);
TagCreateWithoutPostInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagCreateWithoutPostInput", {
        isAbstract: true
    })
], TagCreateWithoutPostInput);
exports.TagCreateWithoutPostInput = TagCreateWithoutPostInput;
