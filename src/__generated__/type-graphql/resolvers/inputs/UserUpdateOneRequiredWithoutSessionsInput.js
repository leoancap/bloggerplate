"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutSessionsInput_1 = require("../inputs/UserCreateOrConnectWithoutSessionsInput");
const UserCreateWithoutSessionsInput_1 = require("../inputs/UserCreateWithoutSessionsInput");
const UserUpdateWithoutSessionsInput_1 = require("../inputs/UserUpdateWithoutSessionsInput");
const UserUpsertWithoutSessionsInput_1 = require("../inputs/UserUpsertWithoutSessionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutSessionsInput = class UserUpdateOneRequiredWithoutSessionsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutSessionsInput_1.UserCreateWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutSessionsInput_1.UserCreateWithoutSessionsInput)
], UserUpdateOneRequiredWithoutSessionsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSessionsInput_1.UserCreateOrConnectWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutSessionsInput_1.UserCreateOrConnectWithoutSessionsInput)
], UserUpdateOneRequiredWithoutSessionsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutSessionsInput_1.UserUpsertWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutSessionsInput_1.UserUpsertWithoutSessionsInput)
], UserUpdateOneRequiredWithoutSessionsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutSessionsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutSessionsInput_1.UserUpdateWithoutSessionsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutSessionsInput_1.UserUpdateWithoutSessionsInput)
], UserUpdateOneRequiredWithoutSessionsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutSessionsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSessionsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutSessionsInput);
exports.UserUpdateOneRequiredWithoutSessionsInput = UserUpdateOneRequiredWithoutSessionsInput;
