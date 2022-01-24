"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostRelationFilter = class PostRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereInput_1.PostWhereInput)
], PostRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereInput_1.PostWhereInput)
], PostRelationFilter.prototype, "isNot", void 0);
PostRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostRelationFilter", {
        isAbstract: true
    })
], PostRelationFilter);
exports.PostRelationFilter = PostRelationFilter;
