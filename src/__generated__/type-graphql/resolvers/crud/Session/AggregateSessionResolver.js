"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateSessionArgs_1 = require("./args/AggregateSessionArgs");
const Session_1 = require("../../../models/Session");
const AggregateSession_1 = require("../../outputs/AggregateSession");
const helpers_1 = require("../../../helpers");
let AggregateSessionResolver = class AggregateSessionResolver {
    async aggregateSession(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).session.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateSession_1.AggregateSession, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateSessionArgs_1.AggregateSessionArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateSessionResolver.prototype, "aggregateSession", null);
AggregateSessionResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], AggregateSessionResolver);
exports.AggregateSessionResolver = AggregateSessionResolver;
