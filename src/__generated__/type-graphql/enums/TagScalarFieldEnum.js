"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var TagScalarFieldEnum;
(function (TagScalarFieldEnum) {
    TagScalarFieldEnum["name"] = "name";
    TagScalarFieldEnum["postId"] = "postId";
})(TagScalarFieldEnum = exports.TagScalarFieldEnum || (exports.TagScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TagScalarFieldEnum, {
    name: "TagScalarFieldEnum",
    description: undefined,
});
