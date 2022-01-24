"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionWhereInput_1 = require("../inputs/SessionWhereInput");
let SessionListRelationFilter = class SessionListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereInput_1.SessionWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereInput_1.SessionWhereInput)
], SessionListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereInput_1.SessionWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereInput_1.SessionWhereInput)
], SessionListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereInput_1.SessionWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereInput_1.SessionWhereInput)
], SessionListRelationFilter.prototype, "none", void 0);
SessionListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SessionListRelationFilter", {
        isAbstract: true
    })
], SessionListRelationFilter);
exports.SessionListRelationFilter = SessionListRelationFilter;
