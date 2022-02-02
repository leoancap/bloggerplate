"use strict";
var PostWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TagListRelationFilter_1 = require("../inputs/TagListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PostWhereInput = PostWhereInput_1 = class PostWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], PostWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], PostWhereInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagListRelationFilter_1.TagListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagListRelationFilter_1.TagListRelationFilter)
], PostWhereInput.prototype, "tags", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserRelationFilter_1.UserRelationFilter)
], PostWhereInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], PostWhereInput.prototype, "userId", void 0);
PostWhereInput = PostWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostWhereInput", {
        isAbstract: true
    })
], PostWhereInput);
exports.PostWhereInput = PostWhereInput;
