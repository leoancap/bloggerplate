"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PostCreateManyUserInput = class PostCreateManyUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateManyUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateManyUserInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateManyUserInput.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostCreateManyUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostCreateManyUserInput.prototype, "updatedAt", void 0);
PostCreateManyUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateManyUserInput", {
        isAbstract: true
    })
], PostCreateManyUserInput);
exports.PostCreateManyUserInput = PostCreateManyUserInput;
