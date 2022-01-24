"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateWithoutUserInput_1 = require("../inputs/PostCreateWithoutUserInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutUserInput = class PostCreateOrConnectWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateWithoutUserInput_1.PostCreateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateWithoutUserInput_1.PostCreateWithoutUserInput)
], PostCreateOrConnectWithoutUserInput.prototype, "create", void 0);
PostCreateOrConnectWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], PostCreateOrConnectWithoutUserInput);
exports.PostCreateOrConnectWithoutUserInput = PostCreateOrConnectWithoutUserInput;
