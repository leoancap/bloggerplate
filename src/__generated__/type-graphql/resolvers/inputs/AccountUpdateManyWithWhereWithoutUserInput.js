"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AccountScalarWhereInput_1 = require("../inputs/AccountScalarWhereInput");
const AccountUpdateManyMutationInput_1 = require("../inputs/AccountUpdateManyMutationInput");
let AccountUpdateManyWithWhereWithoutUserInput = class AccountUpdateManyWithWhereWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountScalarWhereInput_1.AccountScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountScalarWhereInput_1.AccountScalarWhereInput)
], AccountUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AccountUpdateManyMutationInput_1.AccountUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AccountUpdateManyMutationInput_1.AccountUpdateManyMutationInput)
], AccountUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
AccountUpdateManyWithWhereWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AccountUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], AccountUpdateManyWithWhereWithoutUserInput);
exports.AccountUpdateManyWithWhereWithoutUserInput = AccountUpdateManyWithWhereWithoutUserInput;
