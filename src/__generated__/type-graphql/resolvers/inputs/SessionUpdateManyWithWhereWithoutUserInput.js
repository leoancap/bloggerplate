"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionScalarWhereInput_1 = require("../inputs/SessionScalarWhereInput");
const SessionUpdateManyMutationInput_1 = require("../inputs/SessionUpdateManyMutationInput");
let SessionUpdateManyWithWhereWithoutUserInput = class SessionUpdateManyWithWhereWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionScalarWhereInput_1.SessionScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionScalarWhereInput_1.SessionScalarWhereInput)
], SessionUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateManyMutationInput_1.SessionUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateManyMutationInput_1.SessionUpdateManyMutationInput)
], SessionUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
SessionUpdateManyWithWhereWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], SessionUpdateManyWithWhereWithoutUserInput);
exports.SessionUpdateManyWithWhereWithoutUserInput = SessionUpdateManyWithWhereWithoutUserInput;
