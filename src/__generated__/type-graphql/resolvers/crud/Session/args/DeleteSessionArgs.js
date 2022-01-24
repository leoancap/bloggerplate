"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
let DeleteSessionArgs = class DeleteSessionArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], DeleteSessionArgs.prototype, "where", void 0);
DeleteSessionArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteSessionArgs);
exports.DeleteSessionArgs = DeleteSessionArgs;
