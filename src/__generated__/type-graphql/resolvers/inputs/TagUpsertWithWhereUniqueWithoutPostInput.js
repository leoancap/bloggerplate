"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpsertWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateWithoutPostInput_1 = require("../inputs/TagCreateWithoutPostInput");
const TagUpdateWithoutPostInput_1 = require("../inputs/TagUpdateWithoutPostInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagUpsertWithWhereUniqueWithoutPostInput = class TagUpsertWithWhereUniqueWithoutPostInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagUpsertWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagUpdateWithoutPostInput_1.TagUpdateWithoutPostInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagUpdateWithoutPostInput_1.TagUpdateWithoutPostInput)
], TagUpsertWithWhereUniqueWithoutPostInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagCreateWithoutPostInput_1.TagCreateWithoutPostInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagCreateWithoutPostInput_1.TagCreateWithoutPostInput)
], TagUpsertWithWhereUniqueWithoutPostInput.prototype, "create", void 0);
TagUpsertWithWhereUniqueWithoutPostInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagUpsertWithWhereUniqueWithoutPostInput", {
        isAbstract: true
    })
], TagUpsertWithWhereUniqueWithoutPostInput);
exports.TagUpsertWithWhereUniqueWithoutPostInput = TagUpsertWithWhereUniqueWithoutPostInput;
