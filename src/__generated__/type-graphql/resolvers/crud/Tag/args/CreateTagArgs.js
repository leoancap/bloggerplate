"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateInput_1 = require("../../../inputs/TagCreateInput");
let CreateTagArgs = class CreateTagArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TagCreateInput_1.TagCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", TagCreateInput_1.TagCreateInput)
], CreateTagArgs.prototype, "data", void 0);
CreateTagArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateTagArgs);
exports.CreateTagArgs = CreateTagArgs;
