"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let TagWhereUniqueInput = class TagWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagWhereUniqueInput.prototype, "name", void 0);
TagWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagWhereUniqueInput", {
        isAbstract: true
    })
], TagWhereUniqueInput);
exports.TagWhereUniqueInput = TagWhereUniqueInput;
