"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutProjectsInput_1 = require("../inputs/UserCreateOrConnectWithoutProjectsInput");
const UserCreateWithoutProjectsInput_1 = require("../inputs/UserCreateWithoutProjectsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutProjectsInput = class UserCreateNestedOneWithoutProjectsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutProjectsInput_1.UserCreateWithoutProjectsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutProjectsInput_1.UserCreateWithoutProjectsInput)
], UserCreateNestedOneWithoutProjectsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProjectsInput_1.UserCreateOrConnectWithoutProjectsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutProjectsInput_1.UserCreateOrConnectWithoutProjectsInput)
], UserCreateNestedOneWithoutProjectsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutProjectsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutProjectsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutProjectsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutProjectsInput);
exports.UserCreateNestedOneWithoutProjectsInput = UserCreateNestedOneWithoutProjectsInput;
