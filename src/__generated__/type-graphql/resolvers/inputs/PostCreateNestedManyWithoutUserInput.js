"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateManyUserInputEnvelope_1 = require("../inputs/PostCreateManyUserInputEnvelope");
const PostCreateOrConnectWithoutUserInput_1 = require("../inputs/PostCreateOrConnectWithoutUserInput");
const PostCreateWithoutUserInput_1 = require("../inputs/PostCreateWithoutUserInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedManyWithoutUserInput = class PostCreateNestedManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostCreateWithoutUserInput_1.PostCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateNestedManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUserInput_1.PostCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateManyUserInputEnvelope_1.PostCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateManyUserInputEnvelope_1.PostCreateManyUserInputEnvelope)
], PostCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
PostCreateNestedManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], PostCreateNestedManyWithoutUserInput);
exports.PostCreateNestedManyWithoutUserInput = PostCreateNestedManyWithoutUserInput;
