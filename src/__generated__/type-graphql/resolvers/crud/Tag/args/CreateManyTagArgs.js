"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const TagCreateManyInput_1 = require("../../../inputs/TagCreateManyInput");
let CreateManyTagArgs = class CreateManyTagArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [TagCreateManyInput_1.TagCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyTagArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyTagArgs.prototype, "skipDuplicates", void 0);
CreateManyTagArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyTagArgs);
exports.CreateManyTagArgs = CreateManyTagArgs;
