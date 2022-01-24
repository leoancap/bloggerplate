"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateOrConnectWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateWithoutPostInput_1 = require("../inputs/TagCreateWithoutPostInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateOrConnectWithoutPostInput = class TagCreateOrConnectWithoutPostInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagCreateOrConnectWithoutPostInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagCreateWithoutPostInput_1.TagCreateWithoutPostInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagCreateWithoutPostInput_1.TagCreateWithoutPostInput)
], TagCreateOrConnectWithoutPostInput.prototype, "create", void 0);
TagCreateOrConnectWithoutPostInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagCreateOrConnectWithoutPostInput", {
        isAbstract: true
    })
], TagCreateOrConnectWithoutPostInput);
exports.TagCreateOrConnectWithoutPostInput = TagCreateOrConnectWithoutPostInput;
