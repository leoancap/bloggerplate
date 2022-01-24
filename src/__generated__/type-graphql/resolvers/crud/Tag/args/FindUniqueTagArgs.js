"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
let FindUniqueTagArgs = class FindUniqueTagArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], FindUniqueTagArgs.prototype, "where", void 0);
FindUniqueTagArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueTagArgs);
exports.FindUniqueTagArgs = FindUniqueTagArgs;
