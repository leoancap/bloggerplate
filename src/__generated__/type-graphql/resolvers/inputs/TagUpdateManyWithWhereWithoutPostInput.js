"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateManyWithWhereWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagScalarWhereInput_1 = require("../inputs/TagScalarWhereInput");
const TagUpdateManyMutationInput_1 = require("../inputs/TagUpdateManyMutationInput");
let TagUpdateManyWithWhereWithoutPostInput = class TagUpdateManyWithWhereWithoutPostInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagScalarWhereInput_1.TagScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagScalarWhereInput_1.TagScalarWhereInput)
], TagUpdateManyWithWhereWithoutPostInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagUpdateManyMutationInput_1.TagUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagUpdateManyMutationInput_1.TagUpdateManyMutationInput)
], TagUpdateManyWithWhereWithoutPostInput.prototype, "data", void 0);
TagUpdateManyWithWhereWithoutPostInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagUpdateManyWithWhereWithoutPostInput", {
        isAbstract: true
    })
], TagUpdateManyWithWhereWithoutPostInput);
exports.TagUpdateManyWithWhereWithoutPostInput = TagUpdateManyWithWhereWithoutPostInput;
