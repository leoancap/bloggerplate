"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["title"] = "title";
    PostScalarFieldEnum["body"] = "body";
    PostScalarFieldEnum["createdAt"] = "createdAt";
    PostScalarFieldEnum["updatedAt"] = "updatedAt";
    PostScalarFieldEnum["userId"] = "userId";
})(PostScalarFieldEnum = exports.PostScalarFieldEnum || (exports.PostScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
    name: "PostScalarFieldEnum",
    description: undefined,
});
