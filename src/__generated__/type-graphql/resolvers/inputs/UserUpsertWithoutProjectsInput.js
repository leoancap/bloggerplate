"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutProjectsInput_1 = require("../inputs/UserCreateWithoutProjectsInput");
const UserUpdateWithoutProjectsInput_1 = require("../inputs/UserUpdateWithoutProjectsInput");
let UserUpsertWithoutProjectsInput = class UserUpsertWithoutProjectsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutProjectsInput_1.UserUpdateWithoutProjectsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutProjectsInput_1.UserUpdateWithoutProjectsInput)
], UserUpsertWithoutProjectsInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutProjectsInput_1.UserCreateWithoutProjectsInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutProjectsInput_1.UserCreateWithoutProjectsInput)
], UserUpsertWithoutProjectsInput.prototype, "create", void 0);
UserUpsertWithoutProjectsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutProjectsInput", {
        isAbstract: true
    })
], UserUpsertWithoutProjectsInput);
exports.UserUpsertWithoutProjectsInput = UserUpsertWithoutProjectsInput;
