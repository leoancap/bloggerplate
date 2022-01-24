"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyMutationInput_1 = require("../inputs/PostUpdateManyMutationInput");
let PostUpdateManyWithWhereWithoutUserInput = class PostUpdateManyWithWhereWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostScalarWhereInput_1.PostScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostScalarWhereInput_1.PostScalarWhereInput)
], PostUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateManyMutationInput_1.PostUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateManyMutationInput_1.PostUpdateManyMutationInput)
], PostUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
PostUpdateManyWithWhereWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], PostUpdateManyWithWhereWithoutUserInput);
exports.PostUpdateManyWithWhereWithoutUserInput = PostUpdateManyWithWhereWithoutUserInput;
