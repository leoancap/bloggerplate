"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagOrderByWithRelationInput_1 = require("../../../inputs/TagOrderByWithRelationInput");
const TagWhereInput_1 = require("../../../inputs/TagWhereInput");
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
const TagScalarFieldEnum_1 = require("../../../../enums/TagScalarFieldEnum");
let PostTagsArgs = class PostTagsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereInput_1.TagWhereInput)
], PostTagsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagOrderByWithRelationInput_1.TagOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostTagsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], PostTagsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostTagsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostTagsArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagScalarFieldEnum_1.TagScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostTagsArgs.prototype, "distinct", void 0);
PostTagsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], PostTagsArgs);
exports.PostTagsArgs = PostTagsArgs;
