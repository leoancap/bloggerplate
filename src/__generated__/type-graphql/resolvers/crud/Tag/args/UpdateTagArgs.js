"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagUpdateInput_1 = require("../../../inputs/TagUpdateInput");
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
let UpdateTagArgs = class UpdateTagArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagUpdateInput_1.TagUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagUpdateInput_1.TagUpdateInput)
], UpdateTagArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], UpdateTagArgs.prototype, "where", void 0);
UpdateTagArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateTagArgs);
exports.UpdateTagArgs = UpdateTagArgs;
