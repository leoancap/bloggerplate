"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutAccountsInput_1 = require("../inputs/UserCreateOrConnectWithoutAccountsInput");
const UserCreateWithoutAccountsInput_1 = require("../inputs/UserCreateWithoutAccountsInput");
const UserUpdateWithoutAccountsInput_1 = require("../inputs/UserUpdateWithoutAccountsInput");
const UserUpsertWithoutAccountsInput_1 = require("../inputs/UserUpsertWithoutAccountsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAccountsInput = class UserUpdateOneRequiredWithoutAccountsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAccountsInput_1.UserCreateWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAccountsInput_1.UserCreateWithoutAccountsInput)
], UserUpdateOneRequiredWithoutAccountsInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAccountsInput_1.UserCreateOrConnectWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutAccountsInput_1.UserCreateOrConnectWithoutAccountsInput)
], UserUpdateOneRequiredWithoutAccountsInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutAccountsInput_1.UserUpsertWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutAccountsInput_1.UserUpsertWithoutAccountsInput)
], UserUpdateOneRequiredWithoutAccountsInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAccountsInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutAccountsInput_1.UserUpdateWithoutAccountsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutAccountsInput_1.UserUpdateWithoutAccountsInput)
], UserUpdateOneRequiredWithoutAccountsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutAccountsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAccountsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutAccountsInput);
exports.UserUpdateOneRequiredWithoutAccountsInput = UserUpdateOneRequiredWithoutAccountsInput;
