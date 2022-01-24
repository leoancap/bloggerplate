"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostUpdateWithoutUserInput_1 = require("../inputs/PostUpdateWithoutUserInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateWithWhereUniqueWithoutUserInput = class PostUpdateWithWhereUniqueWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateWithoutUserInput_1.PostUpdateWithoutUserInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateWithoutUserInput_1.PostUpdateWithoutUserInput)
], PostUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
PostUpdateWithWhereUniqueWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], PostUpdateWithWhereUniqueWithoutUserInput);
exports.PostUpdateWithWhereUniqueWithoutUserInput = PostUpdateWithWhereUniqueWithoutUserInput;
