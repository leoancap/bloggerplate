"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionWhereInput_1 = require("../../../inputs/SessionWhereInput");
let DeleteManySessionArgs = class DeleteManySessionArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereInput_1.SessionWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereInput_1.SessionWhereInput)
], DeleteManySessionArgs.prototype, "where", void 0);
DeleteManySessionArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManySessionArgs);
exports.DeleteManySessionArgs = DeleteManySessionArgs;
