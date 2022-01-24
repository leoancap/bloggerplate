"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagWhereInput_1 = require("../../../inputs/TagWhereInput");
let DeleteManyTagArgs = class DeleteManyTagArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", TagWhereInput_1.TagWhereInput)
], DeleteManyTagArgs.prototype, "where", void 0);
DeleteManyTagArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyTagArgs);
exports.DeleteManyTagArgs = DeleteManyTagArgs;
