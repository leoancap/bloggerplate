"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateInput_1 = require("../../../inputs/TagCreateInput");
const TagUpdateInput_1 = require("../../../inputs/TagUpdateInput");
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
let UpsertTagArgs = class UpsertTagArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], UpsertTagArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagCreateInput_1.TagCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagCreateInput_1.TagCreateInput)
], UpsertTagArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagUpdateInput_1.TagUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagUpdateInput_1.TagUpdateInput)
], UpsertTagArgs.prototype, "update", void 0);
UpsertTagArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertTagArgs);
exports.UpsertTagArgs = UpsertTagArgs;
