"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionCreateManyInput_1 = require("../../../inputs/SessionCreateManyInput");
let CreateManySessionArgs = class CreateManySessionArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionCreateManyInput_1.SessionCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManySessionArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManySessionArgs.prototype, "skipDuplicates", void 0);
CreateManySessionArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManySessionArgs);
exports.CreateManySessionArgs = CreateManySessionArgs;
