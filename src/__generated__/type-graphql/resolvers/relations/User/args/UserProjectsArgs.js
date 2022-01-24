"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProjectsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostOrderByWithRelationInput_1 = require("../../../inputs/PostOrderByWithRelationInput");
const PostWhereInput_1 = require("../../../inputs/PostWhereInput");
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
const PostScalarFieldEnum_1 = require("../../../../enums/PostScalarFieldEnum");
let UserProjectsArgs = class UserProjectsArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereInput_1.PostWhereInput)
], UserProjectsArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostOrderByWithRelationInput_1.PostOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserProjectsArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], UserProjectsArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserProjectsArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], UserProjectsArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostScalarFieldEnum_1.PostScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserProjectsArgs.prototype, "distinct", void 0);
UserProjectsArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UserProjectsArgs);
exports.UserProjectsArgs = UserProjectsArgs;
