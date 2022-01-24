"use strict";
var TagWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostRelationFilter_1 = require("../inputs/PostRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let TagWhereInput = TagWhereInput_1 = class TagWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], TagWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], TagWhereInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostRelationFilter_1.PostRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostRelationFilter_1.PostRelationFilter)
], TagWhereInput.prototype, "Post", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], TagWhereInput.prototype, "postId", void 0);
TagWhereInput = TagWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagWhereInput", {
        isAbstract: true
    })
], TagWhereInput);
exports.TagWhereInput = TagWhereInput;
