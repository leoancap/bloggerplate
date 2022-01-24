"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagCreateManyInput = class TagCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagCreateManyInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagCreateManyInput.prototype, "postId", void 0);
TagCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagCreateManyInput", {
        isAbstract: true
    })
], TagCreateManyInput);
exports.TagCreateManyInput = TagCreateManyInput;
