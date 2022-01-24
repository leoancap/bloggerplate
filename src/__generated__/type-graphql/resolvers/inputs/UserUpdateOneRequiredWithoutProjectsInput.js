"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutProjectsInput_1 = require("../inputs/UserCreateOrConnectWithoutProjectsInput");
const UserCreateWithoutProjectsInput_1 = require("../inputs/UserCreateWithoutProjectsInput");
const UserUpdateWithoutProjectsInput_1 = require("../inputs/UserUpdateWithoutProjectsInput");
const UserUpsertWithoutProjectsInput_1 = require("../inputs/UserUpsertWithoutProjectsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutProjectsInput = class UserUpdateOneRequiredWithoutProjectsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutProjectsInput_1.UserCreateWithoutProjectsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutProjectsInput_1.UserCreateWithoutProjectsInput)
], UserUpdateOneRequiredWithoutProjectsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProjectsInput_1.UserCreateOrConnectWithoutProjectsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutProjectsInput_1.UserCreateOrConnectWithoutProjectsInput)
], UserUpdateOneRequiredWithoutProjectsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutProjectsInput_1.UserUpsertWithoutProjectsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutProjectsInput_1.UserUpsertWithoutProjectsInput)
], UserUpdateOneRequiredWithoutProjectsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutProjectsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutProjectsInput_1.UserUpdateWithoutProjectsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutProjectsInput_1.UserUpdateWithoutProjectsInput)
], UserUpdateOneRequiredWithoutProjectsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutProjectsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutProjectsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutProjectsInput);
exports.UserUpdateOneRequiredWithoutProjectsInput = UserUpdateOneRequiredWithoutProjectsInput;
