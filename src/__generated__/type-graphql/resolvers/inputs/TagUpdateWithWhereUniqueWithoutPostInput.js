"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagUpdateWithoutPostInput_1 = require("../inputs/TagUpdateWithoutPostInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagUpdateWithWhereUniqueWithoutPostInput = class TagUpdateWithWhereUniqueWithoutPostInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagUpdateWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagUpdateWithoutPostInput_1.TagUpdateWithoutPostInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagUpdateWithoutPostInput_1.TagUpdateWithoutPostInput)
], TagUpdateWithWhereUniqueWithoutPostInput.prototype, "data", void 0);
TagUpdateWithWhereUniqueWithoutPostInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagUpdateWithWhereUniqueWithoutPostInput", {
        isAbstract: true
    })
], TagUpdateWithWhereUniqueWithoutPostInput);
exports.TagUpdateWithWhereUniqueWithoutPostInput = TagUpdateWithWhereUniqueWithoutPostInput;
