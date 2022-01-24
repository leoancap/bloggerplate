"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionCreateManyUserInput_1 = require("../inputs/SessionCreateManyUserInput");
let SessionCreateManyUserInputEnvelope = class SessionCreateManyUserInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SessionCreateManyUserInput_1.SessionCreateManyUserInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SessionCreateManyUserInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SessionCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
SessionCreateManyUserInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], SessionCreateManyUserInputEnvelope);
exports.SessionCreateManyUserInputEnvelope = SessionCreateManyUserInputEnvelope;
