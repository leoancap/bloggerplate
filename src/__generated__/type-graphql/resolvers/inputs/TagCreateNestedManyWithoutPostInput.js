"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateNestedManyWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateManyPostInputEnvelope_1 = require("../inputs/TagCreateManyPostInputEnvelope");
const TagCreateOrConnectWithoutPostInput_1 = require("../inputs/TagCreateOrConnectWithoutPostInput");
const TagCreateWithoutPostInput_1 = require("../inputs/TagCreateWithoutPostInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateNestedManyWithoutPostInput = class TagCreateNestedManyWithoutPostInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagCreateWithoutPostInput_1.TagCreateWithoutPostInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagCreateNestedManyWithoutPostInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutPostInput_1.TagCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagCreateNestedManyWithoutPostInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagCreateManyPostInputEnvelope_1.TagCreateManyPostInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagCreateManyPostInputEnvelope_1.TagCreateManyPostInputEnvelope)
], TagCreateNestedManyWithoutPostInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagCreateNestedManyWithoutPostInput.prototype, "connect", void 0);
TagCreateNestedManyWithoutPostInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagCreateNestedManyWithoutPostInput", {
        isAbstract: true
    })
], TagCreateNestedManyWithoutPostInput);
exports.TagCreateNestedManyWithoutPostInput = TagCreateNestedManyWithoutPostInput;
