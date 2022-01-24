"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateManyUserInputEnvelope_1 = require("../inputs/PostCreateManyUserInputEnvelope");
const PostCreateOrConnectWithoutUserInput_1 = require("../inputs/PostCreateOrConnectWithoutUserInput");
const PostCreateWithoutUserInput_1 = require("../inputs/PostCreateWithoutUserInput");
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/PostUpdateManyWithWhereWithoutUserInput");
const PostUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/PostUpdateWithWhereUniqueWithoutUserInput");
const PostUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/PostUpsertWithWhereUniqueWithoutUserInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateManyWithoutUserInput = class PostUpdateManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostCreateWithoutUserInput_1.PostCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutUserInput_1.PostCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutUserInput_1.PostUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateManyUserInputEnvelope_1.PostCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateManyUserInputEnvelope_1.PostCreateManyUserInputEnvelope)
], PostUpdateManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostWhereUniqueInput_1.PostWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutUserInput_1.PostUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutUserInput_1.PostUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PostScalarWhereInput_1.PostScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
PostUpdateManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], PostUpdateManyWithoutUserInput);
exports.PostUpdateManyWithoutUserInput = PostUpdateManyWithoutUserInput;
