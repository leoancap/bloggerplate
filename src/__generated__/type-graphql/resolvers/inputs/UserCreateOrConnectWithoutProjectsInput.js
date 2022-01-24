"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutProjectsInput_1 = require("../inputs/UserCreateWithoutProjectsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutProjectsInput = class UserCreateOrConnectWithoutProjectsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutProjectsInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutProjectsInput_1.UserCreateWithoutProjectsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutProjectsInput_1.UserCreateWithoutProjectsInput)
], UserCreateOrConnectWithoutProjectsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutProjectsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutProjectsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutProjectsInput);
exports.UserCreateOrConnectWithoutProjectsInput = UserCreateOrConnectWithoutProjectsInput;
