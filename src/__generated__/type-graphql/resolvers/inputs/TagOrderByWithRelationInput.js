"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostOrderByWithRelationInput_1 = require("../inputs/PostOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagOrderByWithRelationInput = class TagOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagOrderByWithRelationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostOrderByWithRelationInput_1.PostOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostOrderByWithRelationInput_1.PostOrderByWithRelationInput)
], TagOrderByWithRelationInput.prototype, "Post", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TagOrderByWithRelationInput.prototype, "postId", void 0);
TagOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("TagOrderByWithRelationInput", {
        isAbstract: true
    })
], TagOrderByWithRelationInput);
exports.TagOrderByWithRelationInput = TagOrderByWithRelationInput;
