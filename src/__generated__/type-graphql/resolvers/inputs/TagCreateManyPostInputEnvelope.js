"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateManyPostInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateManyPostInput_1 = require("../inputs/TagCreateManyPostInput");
let TagCreateManyPostInputEnvelope = class TagCreateManyPostInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagCreateManyPostInput_1.TagCreateManyPostInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagCreateManyPostInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TagCreateManyPostInputEnvelope.prototype, "skipDuplicates", void 0);
TagCreateManyPostInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagCreateManyPostInputEnvelope", {
        isAbstract: true
    })
], TagCreateManyPostInputEnvelope);
exports.TagCreateManyPostInputEnvelope = TagCreateManyPostInputEnvelope;
