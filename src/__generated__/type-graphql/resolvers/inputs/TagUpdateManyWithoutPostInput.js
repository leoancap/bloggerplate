"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateManyWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateManyPostInputEnvelope_1 = require("../inputs/TagCreateManyPostInputEnvelope");
const TagCreateOrConnectWithoutPostInput_1 = require("../inputs/TagCreateOrConnectWithoutPostInput");
const TagCreateWithoutPostInput_1 = require("../inputs/TagCreateWithoutPostInput");
const TagScalarWhereInput_1 = require("../inputs/TagScalarWhereInput");
const TagUpdateManyWithWhereWithoutPostInput_1 = require("../inputs/TagUpdateManyWithWhereWithoutPostInput");
const TagUpdateWithWhereUniqueWithoutPostInput_1 = require("../inputs/TagUpdateWithWhereUniqueWithoutPostInput");
const TagUpsertWithWhereUniqueWithoutPostInput_1 = require("../inputs/TagUpsertWithWhereUniqueWithoutPostInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagUpdateManyWithoutPostInput = class TagUpdateManyWithoutPostInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagCreateWithoutPostInput_1.TagCreateWithoutPostInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutPostInput_1.TagCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagUpsertWithWhereUniqueWithoutPostInput_1.TagUpsertWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagCreateManyPostInputEnvelope_1.TagCreateManyPostInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagCreateManyPostInputEnvelope_1.TagCreateManyPostInputEnvelope)
], TagUpdateManyWithoutPostInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagUpdateWithWhereUniqueWithoutPostInput_1.TagUpdateWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagUpdateManyWithWhereWithoutPostInput_1.TagUpdateManyWithWhereWithoutPostInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarWhereInput_1.TagScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagUpdateManyWithoutPostInput.prototype, "deleteMany", void 0);
TagUpdateManyWithoutPostInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagUpdateManyWithoutPostInput", {
        isAbstract: true
    })
], TagUpdateManyWithoutPostInput);
exports.TagUpdateManyWithoutPostInput = TagUpdateManyWithoutPostInput;
